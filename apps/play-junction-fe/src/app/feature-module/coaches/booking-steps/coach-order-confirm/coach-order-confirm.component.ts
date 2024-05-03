import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

@Component({
  selector: 'app-coach-order-confirm',
  templateUrl: './coach-order-confirm.component.html',
  styleUrls: ['./coach-order-confirm.component.scss']
})
export class CoachOrderConfirmComponent {
  public routes = routes;
}
