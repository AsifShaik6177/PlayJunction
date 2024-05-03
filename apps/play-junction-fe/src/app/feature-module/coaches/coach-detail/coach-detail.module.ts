import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachDetailRoutingModule } from './coach-detail-routing.module';
import { CoachDetailComponent } from './coach-detail.component';
import { sharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    CoachDetailComponent
  ],
  imports: [
    CommonModule,
    CoachDetailRoutingModule,
    sharedModule
  ]
})
export class CoachDetailModule { }
