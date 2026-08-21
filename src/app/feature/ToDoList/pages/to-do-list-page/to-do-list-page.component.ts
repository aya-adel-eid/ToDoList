import { Component, inject, OnInit, signal } from '@angular/core';
import { ToDoListService } from '../../to-do-list.service';
import { ToDolistCardComponent } from '../../component/to-dolist-card/to-dolist-card.component';
import { ITasks, Task } from '../../../interfaces/ITasks';

@Component({
  selector: 'app-to-do-list-page',
  imports: [ToDolistCardComponent],
  templateUrl: './to-do-list-page.component.html',
  styleUrl: './to-do-list-page.component.css',
})
export class ToDoListPageComponent implements OnInit {
  private readonly toDoListService = inject(ToDoListService);
  allTasks = signal<Task[] | null>(null);
  ngOnInit(): void {
    this.getAllToDoList();
  }
  getAllToDoList() {
    this.toDoListService.getAllToDoList().subscribe({
      next: (resp) => {
        this.allTasks.set(resp.data);
        console.log(resp.data);
      },
    });
  }
}
