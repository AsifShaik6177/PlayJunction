import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CageCheckoutRoutingModule } from './cage-checkout-routing.module';
import { CageCheckoutComponent } from './cage-checkout.component';


@NgModule({
  declarations: [
    CageCheckoutComponent
  ],
  imports: [
    CommonModule,
    CageCheckoutRoutingModule
  ]
})
export class CageCheckoutModule { }
