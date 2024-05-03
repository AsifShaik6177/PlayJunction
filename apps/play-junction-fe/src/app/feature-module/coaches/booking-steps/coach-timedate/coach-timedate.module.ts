import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachTimedateRoutingModule } from './coach-timedate-routing.module';
import { CoachTimedateComponent } from './coach-timedate.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CoachTimedateComponent
  ],
  imports: [
    CommonModule,
    CoachTimedateRoutingModule,
    sharedModule
  ]
})
export class CoachTimedateModule { }
