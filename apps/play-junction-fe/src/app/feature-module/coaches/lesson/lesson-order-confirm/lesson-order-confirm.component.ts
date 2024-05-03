import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

@Component({
  selector: 'app-lesson-order-confirm',
  templateUrl: './lesson-order-confirm.component.html',
  styleUrls: ['./lesson-order-confirm.component.scss']
})
export class LessonOrderConfirmComponent {
  public routes = routes;
}
