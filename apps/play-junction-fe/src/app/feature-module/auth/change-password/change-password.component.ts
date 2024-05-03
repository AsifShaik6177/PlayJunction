import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { routes } from '../../../core/helpers/routes';
import { AuthService } from '../../../core/service/auth/authservice';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  public routes = routes;
  public show_password1 = true;
  public show_password2 = true;
  public confirmPassword = true;

  form = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }
  constructor(private auth: AuthService) {}

  resetpassword() {
    if (
      this.form.value.password === this.form.value.confirmpassword &&
      this.form.valid
    ) {
      this.confirmPassword = true;
      this.auth.forgotpassword();
    }else{
      this.form.markAllAsTouched();
    }
  }
}
