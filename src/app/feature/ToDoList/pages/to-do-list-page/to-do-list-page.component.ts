import { Component, inject, OnInit, signal } from '@angular/core';
import { ToDoListService } from '../../to-do-list.service';
import { ToDolistCardComponent } from '../../component/to-dolist-card/to-dolist-card.component';
import { ITasks, Task } from '../../../interfaces/ITasks';
import { FormAddtaskComponent } from '../../component/form-addtask/form-addtask.component';

@Component({
  selector: 'app-to-do-list-page',
  imports: [ToDolistCardComponent, FormAddtaskComponent],
  templateUrl: './to-do-list-page.component.html',
  styleUrl: './to-do-list-page.component.css',
})
export class ToDoListPageComponent implements OnInit {
  private readonly toDoListService = inject(ToDoListService);
  allTasks = this.toDoListService.allTasks;
  openModul = this.toDoListService.openModul;
  ngOnInit(): void {
    this.getAllToDoList();
  }
  getAllToDoList() {
    this.toDoListService.getAllToDoList();
  }
  toggle() {
    this.toDoListService.toggle();
  }
}
