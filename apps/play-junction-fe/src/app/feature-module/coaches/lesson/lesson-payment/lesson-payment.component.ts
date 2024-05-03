import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

@Component({
  selector: 'app-lesson-payment',
  templateUrl: './lesson-payment.component.html',
  styleUrls: ['./lesson-payment.component.scss']
})
export class LessonPaymentComponent {
  public routes = routes;

}
