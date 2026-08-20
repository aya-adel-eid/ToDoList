import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListPageComponent } from './feature/ToDoList/pages/to-do-list-page/to-do-list-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoListPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ToDoList');
}
