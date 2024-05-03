import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  public routes = routes;
}
