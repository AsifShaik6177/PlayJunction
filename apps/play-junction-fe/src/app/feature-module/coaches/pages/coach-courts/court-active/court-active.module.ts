import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourtActiveRoutingModule } from './court-active-routing.module';
import { CourtActiveComponent } from './court-active.component';
import { sharedModule } from '../../../../../shared/shared.module';


@NgModule({
  declarations: [
    CourtActiveComponent
  ],
  imports: [
    CommonModule,
    CourtActiveRoutingModule,
    sharedModule
  ]
})
export class CourtActiveModule { }
