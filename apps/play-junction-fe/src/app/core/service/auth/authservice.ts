import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../helpers/routes';
import { Credentials, LoginService, RegistrationData } from '../../../../services/login.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router,
    private loginService: LoginService) {}

  public signin(data:Credentials): void {
    if(data){
      this.loginService.login(data).subscribe((res) => {
        if (res) {
          localStorage.setItem('authenticated','true');
          localStorage.setItem('userData', JSON.stringify(res));
          this.router.navigate([routes.home]);
        }
      });
    }
  }
  
  public signup(data:RegistrationData): void {
    if(data){
      this.loginService.registerNewUser(data).subscribe(res=>{
        if(res){
          localStorage.setItem('authenticated', 'true');
          this.router.navigate([routes.login]);
        }
      });
    }
    // localStorage.setItem('authenticated', 'true');
    // this.router.navigate([routes.login]);
  }

  public forgotpassword(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([routes.login]);
  }
  public userdashboard(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([routes.userDashboard]);
  }

  public updateUserData():void {

  }
  
}

