import { Component, inject, signal } from '@angular/core';
import { ToDoListService } from '../../ToDoList/to-do-list.service';

@Component({
  selector: 'app-to-do-list-page',
  imports: [],
  templateUrl: './to-do-list-page.component.html',
  styleUrl: './to-do-list-page.component.css',
})
export class ToDoListPageComponent {
  private readonly toDoList = inject(ToDoListService);
  allToDoList = signal();
  getAllToDoList() {}
}
