import { Component } from '@angular/core';
import { routes } from '../../../../../core/core.index';

@Component({
  selector: 'app-setting-password',
  templateUrl: './setting-password.component.html',
  styleUrls: ['./setting-password.component.scss']
})
export class SettingPasswordComponent {
  public routes = routes;
}
