import { Component, inject, model } from '@angular/core';
import { Task } from '../../../interfaces/ITasks';
import { DatePipe } from '@angular/common';
import { ToDoListService } from '../../to-do-list.service';

@Component({
  selector: 'app-to-dolist-card',
  imports: [DatePipe],
  templateUrl: './to-dolist-card.component.html',
  styleUrl: './to-dolist-card.component.css',
})
export class ToDolistCardComponent {
  task = model<Task>();
  private readonly todoListService = inject(ToDoListService);
  editTask(task: Task) {
    this.todoListService.editTask.set(task);
    this.todoListService.toggle();
  }
  deletetask(task: Task) {
    this.todoListService.deleteTask(task.id).subscribe({
      next: (resp) => {
        this.todoListService.allTasks.update((val) => val.filter((t) => t.id !== task.id));
        console.log(resp);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
