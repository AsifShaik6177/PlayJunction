import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachOrderConfirmRoutingModule } from './coach-order-confirm-routing.module';
import { CoachOrderConfirmComponent } from './coach-order-confirm.component';


@NgModule({
  declarations: [
    CoachOrderConfirmComponent
  ],
  imports: [
    CommonModule,
    CoachOrderConfirmRoutingModule
  ]
})
export class CoachOrderConfirmModule { }
