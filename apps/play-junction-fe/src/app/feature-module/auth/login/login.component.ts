import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { routes } from '../../../core/helpers/routes';
import { AuthService } from '../../../core/service/auth/authservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public routes = routes;
  public show_password = true;
  public show_password1 =true

  form = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private auth: AuthService) {}

  user() {
    if (this.form.valid) {
      this.auth.signin({email:this.f.email.value, password:this.f.password.value})
    }else{
      this.form.markAllAsTouched();
    }
  }
  // admin() {
  //   if (this.form.valid) {
  //     this.auth.signin();
  //   }else{
  //     this.form.markAllAsTouched();
  //   }
  // }
  togglePassword() {
    this.show_password = !this.show_password;
    this.show_password1 =!this.show_password1;
  }
  ngOnInit(): void {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
    }
  }
}
