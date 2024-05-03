import { Component } from '@angular/core';
import { routes } from '../../../core/core.index';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  public routes = routes;
}
