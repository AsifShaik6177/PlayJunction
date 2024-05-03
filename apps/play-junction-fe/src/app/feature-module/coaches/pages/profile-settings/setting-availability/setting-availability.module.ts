import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SettingAvailabilityRoutingModule } from './setting-availability-routing.module';
import { SettingAvailabilityComponent } from './setting-availability.component';
import { sharedModule } from '../../../../../shared/shared.module';


@NgModule({
  declarations: [
    SettingAvailabilityComponent
  ],
  imports: [
    CommonModule,
    SettingAvailabilityRoutingModule,
    sharedModule
  ],
  providers: [
    DatePipe,
  ]
})
export class SettingAvailabilityModule { }
