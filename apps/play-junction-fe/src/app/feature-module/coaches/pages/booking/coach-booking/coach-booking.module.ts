import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachBookingRoutingModule } from './coach-booking-routing.module';
import { CoachBookingComponent } from './coach-booking.component';
import { sharedModule } from '../../../../../shared/shared.module';


@NgModule({
  declarations: [
    CoachBookingComponent
  ],
  imports: [
    CommonModule,
    CoachBookingRoutingModule,
    sharedModule
  ]
})
export class CoachBookingModule { }
