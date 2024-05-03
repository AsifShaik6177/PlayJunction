import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningCoachingRoutingModule } from './earning-coaching-routing.module';
import { EarningCoachingComponent } from './earning-coaching.component';
import { sharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    EarningCoachingComponent
  ],
  imports: [
    CommonModule,
    EarningCoachingRoutingModule,
    sharedModule
  ]
})
export class EarningCoachingModule { }
