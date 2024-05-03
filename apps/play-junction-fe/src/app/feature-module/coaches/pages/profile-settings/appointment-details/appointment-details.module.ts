import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentDetailsRoutingModule } from './appointment-details-routing.module';
import { AppointmentDetailsComponent } from './appointment-details.component';
import { sharedModule } from '../../../../../shared/shared.module';


@NgModule({
  declarations: [
    AppointmentDetailsComponent
  ],
  imports: [
    CommonModule,
    AppointmentDetailsRoutingModule,
    sharedModule
  ]
})
export class AppointmentDetailsModule { }
