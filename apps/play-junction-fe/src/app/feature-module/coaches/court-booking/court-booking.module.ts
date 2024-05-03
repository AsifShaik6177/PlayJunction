import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourtBookingRoutingModule } from './court-booking-routing.module';
import { CourtBookingComponent } from './court-booking.component';


@NgModule({
  declarations: [
    CourtBookingComponent
  ],
  imports: [
    CommonModule,
    CourtBookingRoutingModule
  ]
})
export class CourtBookingModule { }
