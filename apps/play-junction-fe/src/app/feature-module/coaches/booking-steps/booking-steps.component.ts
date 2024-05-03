import { Component } from '@angular/core';
import { routes } from '../../../core/core.index';

@Component({
  selector: 'app-booking-steps',
  templateUrl: './booking-steps.component.html',
  styleUrls: ['./booking-steps.component.scss']
})
export class BookingStepsComponent {
public routes = routes;
}
