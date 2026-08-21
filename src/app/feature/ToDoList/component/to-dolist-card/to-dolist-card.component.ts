import { Component, model } from '@angular/core';
import { Task } from '../../../interfaces/ITasks';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-to-dolist-card',
  imports: [DatePipe],
  templateUrl: './to-dolist-card.component.html',
  styleUrl: './to-dolist-card.component.css',
})
export class ToDolistCardComponent {
  task = model<Task>();
}
