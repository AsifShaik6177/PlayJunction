import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachDetailsRoutingModule } from './coach-details-routing.module';
import { CoachDetailsComponent } from './coach-details.component';


@NgModule({
  declarations: [
    CoachDetailsComponent
  ],
  imports: [
    CommonModule,
    CoachDetailsRoutingModule
  ]
})
export class CoachDetailsModule { }
