import {Component, inject, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, UntypedFormGroup, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = signal<boolean>(true);
  loading = signal<boolean>(false);
  private fb = inject(FormBuilder);
  form: UntypedFormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
    password: [null, [Validators.required, Validators.minLength(8)]],
    remember: [null]
  });

  constructor(private readonly router: Router) {}

  onSubmit() {
    this.form!.markAllAsTouched();

    if (this.form!.valid) {
      this.loading.set(true);
      // Send request to server
      this.loading.set(false);
      this.router.navigate(['/dashboard']);
    }
  }
}
