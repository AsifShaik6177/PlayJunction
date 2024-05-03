import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachPersonalinfoRoutingModule } from './coach-personalinfo-routing.module';
import { CoachPersonalinfoComponent } from './coach-personalinfo.component';


@NgModule({
  declarations: [
    CoachPersonalinfoComponent
  ],
  imports: [
    CommonModule,
    CoachPersonalinfoRoutingModule
  ]
})
export class CoachPersonalinfoModule { }
