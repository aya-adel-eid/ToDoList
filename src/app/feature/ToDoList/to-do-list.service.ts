import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ITasks, NeTasks, Task } from '../interfaces/ITasks';
import { INewTask } from '../interfaces/INewTask';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private readonly httpClient = inject(HttpClient);
  openModul = signal<boolean>(false);
  allTasks = signal<Task[] | null>(null);
  getAllToDoList() {
    return this.httpClient.get<ITasks>(`${environment.baseUrl}/todos`).subscribe({
      next: (resp) => {
        this.allTasks.set(resp.data);
        console.log(resp.data);
      },
    });
  }
  addTask(newTask: {}) {
    return this.httpClient.post<NeTasks>(`${environment.baseUrl}/todos`, newTask);
  }
  toggle() {
    this.openModul.set(!this.openModul());
  }
}
