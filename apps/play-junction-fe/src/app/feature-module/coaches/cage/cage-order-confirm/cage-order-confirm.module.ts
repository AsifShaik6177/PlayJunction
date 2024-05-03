import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CageOrderConfirmRoutingModule } from './cage-order-confirm-routing.module';
import { CageOrderConfirmComponent } from './cage-order-confirm.component';


@NgModule({
  declarations: [
    CageOrderConfirmComponent
  ],
  imports: [
    CommonModule,
    CageOrderConfirmRoutingModule
  ]
})
export class CageOrderConfirmModule { }
