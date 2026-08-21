import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToDoListService } from '../../to-do-list.service';

@Component({
  selector: 'app-form-addtask',
  imports: [ReactiveFormsModule],
  templateUrl: './form-addtask.component.html',
  styleUrl: './form-addtask.component.css',
})
export class FormAddtaskComponent implements OnInit {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly toDoListService = inject(ToDoListService);

  openModul = this.toDoListService.openModul;

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    is_completed: [false],
    due_at: [''],
  });

  ngOnInit(): void {
    const task = this.toDoListService.editTask();
    if (task) {
      this.form.patchValue({
        title: task.title,
        description: task.description ?? '',
        is_completed: task.is_completed,
        due_at: task.due_at ?? '',
      });
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const task = this.toDoListService.editTask();

    if (task) {
      this.toDoListService.updateTask(this.form.value, task.id).subscribe({
        next: (resp) => {
          this.toDoListService.allTasks.update((val) =>
            val.map((t) => (t.id === task.id ? resp.data : t)),
          );
          this.closeAndReset();
        },
        error: (error) => console.error(error),
      });
    } else {
      this.toDoListService.addTask(this.form.value).subscribe({
        next: (resp) => {
          this.toDoListService.allTasks.update((val) => [resp.data, ...(val ?? [])]);
          this.closeAndReset();
        },
        error: (error) => console.error(error),
      });
    }
  }

  private closeAndReset(): void {
    this.form.reset();
    this.toDoListService.editTask.set(null);
    this.toggle();
  }

  toggle(): void {
    this.toDoListService.toggle();
  }
}
