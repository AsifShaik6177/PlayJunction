import { Component } from '@angular/core';
import { routes } from '../../../core/helpers/routes';

@Component({
  selector: 'app-other-settings',
  templateUrl: './other-settings.component.html',
  styleUrls: ['./other-settings.component.scss']
})
export class OtherSettingsComponent {
  public routes = routes;
}
