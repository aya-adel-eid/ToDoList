import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private readonly httpClient = inject(HttpClient);
  getAllToDoList() {
    return this.httpClient.get(`${environment.baseUrl}/todos`);
  }
}
