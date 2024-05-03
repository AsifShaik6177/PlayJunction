import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

@Component({
  selector: 'app-coach-payment',
  templateUrl: './coach-payment.component.html',
  styleUrls: ['./coach-payment.component.scss']
})
export class CoachPaymentComponent {
  public routes = routes;
}
