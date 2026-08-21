import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ITasks } from '../interfaces/ITasks';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private readonly httpClient = inject(HttpClient);
  getAllToDoList() {
    return this.httpClient.get<ITasks>(`${environment.baseUrl}/todos`);
  }
}
