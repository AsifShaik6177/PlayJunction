import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

@Component({
  selector: 'app-cage-checkout',
  templateUrl: './cage-checkout.component.html',
  styleUrl: './cage-checkout.component.scss'
})
export class CageCheckoutComponent {
  public routes = routes

}
