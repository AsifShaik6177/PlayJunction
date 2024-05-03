import { Component } from '@angular/core';
import { routes } from '../../../core/helpers/routes';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent {
public routes=routes
}
