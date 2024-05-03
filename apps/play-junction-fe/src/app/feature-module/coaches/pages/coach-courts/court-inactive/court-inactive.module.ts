import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourtInactiveRoutingModule } from './court-inactive-routing.module';
import { CourtInactiveComponent } from './court-inactive.component';
import { sharedModule } from '../../../../../shared/shared.module';


@NgModule({
  declarations: [
    CourtInactiveComponent
  ],
  imports: [
    CommonModule,
    CourtInactiveRoutingModule,
    sharedModule
  ]
})
export class CourtInactiveModule { }
