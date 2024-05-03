import { Component } from '@angular/core';
import { routes } from '../../../../../core/core.index';


interface data {
  value: string;
}
@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss']
})
export class AppointmentDetailsComponent {
  public routes = routes;
  public selectedValue1 = '';

  selectedList1: data[] = [{ value: 'USD' }, { value: 'Euro' },{ value: 'IND' }];
  images = [
    { isVisible: true },
    { isVisible: true },
    { isVisible: true }
  ];

  
  toggleImage(index: number): void {
    this.images[index].isVisible = !this.images[index].isVisible;
  }
}
