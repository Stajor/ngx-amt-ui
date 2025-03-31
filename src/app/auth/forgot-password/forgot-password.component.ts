import {Component, OnInit, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, UntypedFormGroup, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {Router, RouterLink} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-forgot-password',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
  hide = signal<boolean>(true);
  loading = signal<boolean>(false);
  form?: UntypedFormGroup;

  constructor(private readonly fb: FormBuilder, private readonly router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      remember: [null]
    });
  }

  onSubmit() {
    this.form!.markAllAsTouched();

    if (this.form!.valid) {
      this.loading.set(true);
      // Send request to server
      this.loading.set(false);
      this.router.navigate(['/']);
    }
  }
}
