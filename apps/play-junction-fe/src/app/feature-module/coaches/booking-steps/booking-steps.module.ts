import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingStepsRoutingModule } from './booking-steps-routing.module';
import { BookingStepsComponent } from './booking-steps.component';


@NgModule({
  declarations: [
    BookingStepsComponent
  ],
  imports: [
    CommonModule,
    BookingStepsRoutingModule
  ]
})
export class BookingStepsModule { }
