import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonPaymentRoutingModule } from './lesson-payment-routing.module';
import { LessonPaymentComponent } from './lesson-payment.component';


@NgModule({
  declarations: [
    LessonPaymentComponent
  ],
  imports: [
    CommonModule,
    LessonPaymentRoutingModule
  ]
})
export class LessonPaymentModule { }
