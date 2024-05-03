import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachEarningRoutingModule } from './coach-earning-routing.module';
import { CoachEarningComponent } from './coach-earning.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CoachEarningComponent
  ],
  imports: [
    CommonModule,
    CoachEarningRoutingModule,
    sharedModule
  ]
})
export class CoachEarningModule { }
