import { Component, inject, signal } from '@angular/core';
import { ToDoListService } from '../../to-do-list.service';
import { ToDolistCardComponent } from '../../component/to-dolist-card/to-dolist-card.component';

@Component({
  selector: 'app-to-do-list-page',
  imports: [ToDolistCardComponent],
  templateUrl: './to-do-list-page.component.html',
  styleUrl: './to-do-list-page.component.css',
})
export class ToDoListPageComponent {
  private readonly toDoList = inject(ToDoListService);

  getAllToDoList() {}
}
