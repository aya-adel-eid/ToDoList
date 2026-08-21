import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-addtask',
  imports: [ReactiveFormsModule],
  templateUrl: './form-addtask.component.html',
  styleUrl: './form-addtask.component.css',
})
export class FormAddtaskComponent {
  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    is_completed: [false],
    due_at: [''],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
