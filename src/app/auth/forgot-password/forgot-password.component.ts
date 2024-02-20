import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { };

  ngOnInit(): void {
    this.form = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
    })
  }

  onSubmit() {};
}
