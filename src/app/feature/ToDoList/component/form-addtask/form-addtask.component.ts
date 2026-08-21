import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToDoListService } from '../../to-do-list.service';
@Component({
  selector: 'app-form-addtask',
  imports: [ReactiveFormsModule],
  templateUrl: './form-addtask.component.html',
  styleUrl: './form-addtask.component.css',
})
export class FormAddtaskComponent {
  private readonly fb = inject(FormBuilder);
  private readonly toDoListService = inject(ToDoListService);
  openModul = this.toDoListService.openModul;
  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    is_completed: [false],
    due_at: [''],
  });

  submit(): void {
    if (this.form.valid) {
      this.toDoListService.addTask(this.form.value!).subscribe({
        next: (resp) => {
          console.log(resp.data);
          this.form.reset();
        },
        error: (error) => {
          console.log(error);
        },
      });
    }

    console.log(this.form.value);
  }
  toggle() {
    this.openModul.set(!this.openModul());
  }
}
