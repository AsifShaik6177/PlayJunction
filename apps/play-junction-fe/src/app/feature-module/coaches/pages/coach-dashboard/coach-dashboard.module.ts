import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachDashboardRoutingModule } from './coach-dashboard-routing.module';
import { CoachDashboardComponent } from './coach-dashboard.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CoachDashboardComponent
  ],
  imports: [
    CommonModule,
    CoachDashboardRoutingModule,
    sharedModule
  ]
})
export class CoachDashboardModule { }
