import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { routes } from '../../../core/helpers/routes';
import { AuthService } from '../../../core/service/auth/authservice';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public routes = routes;
  public CustomControler!: string | number;
  public isValidConfirmPassword = false;
  public show_password1= true;
  public show_password2 = true;
  public show_password3= true;
  public show_password4 = true;
  public confirmPassword = true;
  form = new FormGroup({
    Username: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private auth: AuthService) {}

  signup() {
   
    if (
      this.form.value.password === this.form.value.confirmpassword &&
      this.form.valid
    ) {
      this.confirmPassword = true;
      this.auth.signup({name:this.f.Username.value, email: this.f.email.value, password: this.f.password.value});
    } else{
      this.form.markAllAsTouched();
    }
  }


}
