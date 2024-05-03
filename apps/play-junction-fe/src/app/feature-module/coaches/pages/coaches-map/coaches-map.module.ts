import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachesMapRoutingModule } from './coaches-map-routing.module';
import { CoachesMapComponent } from './coaches-map.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CoachesMapComponent,
  ],
  imports: [
    CommonModule,
    CoachesMapRoutingModule,
    sharedModule
  ]
})
export class CoachesMapModule { }
