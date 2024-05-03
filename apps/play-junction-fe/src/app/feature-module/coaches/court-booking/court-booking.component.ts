import { Component } from '@angular/core';
import { CommonService, routes } from '../../../core/core.index';

@Component({
  selector: 'app-court-booking',
  templateUrl: './court-booking.component.html',
  styleUrls: ['./court-booking.component.scss']
})
export class CourtBookingComponent {
public routes = routes;
base = '';
page = '';
last = '';
constructor(
  private common: CommonService,
){
  this.common.base.subscribe((res: string) => {
    this.base = res;
  });
  this.common.page.subscribe((res: string) => {
    this.page = res;
  });
  this.common.last.subscribe((res: string) => {
    this.last = res;
  });
}
}
