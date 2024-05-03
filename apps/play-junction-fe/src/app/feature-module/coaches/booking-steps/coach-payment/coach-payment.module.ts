import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachPaymentRoutingModule } from './coach-payment-routing.module';
import { CoachPaymentComponent } from './coach-payment.component';


@NgModule({
  declarations: [
    CoachPaymentComponent
  ],
  imports: [
    CommonModule,
    CoachPaymentRoutingModule
  ]
})
export class CoachPaymentModule { }
