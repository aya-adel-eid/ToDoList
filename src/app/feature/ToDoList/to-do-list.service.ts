import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ITasks } from '../interfaces/ITasks';
import { INewTask } from '../interfaces/INewTask';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private readonly httpClient = inject(HttpClient);
  openModul = signal<boolean>(false);
  getAllToDoList() {
    return this.httpClient.get<ITasks>(`${environment.baseUrl}/todos`);
  }
  addTask(newTask: {}) {
    return this.httpClient.post<ITasks>(`${environment.baseUrl}/todos`, newTask);
  }
}
