import { Component } from '@angular/core';
import { routes } from '../../../core/helpers/routes';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent {
public routes=routes
}
