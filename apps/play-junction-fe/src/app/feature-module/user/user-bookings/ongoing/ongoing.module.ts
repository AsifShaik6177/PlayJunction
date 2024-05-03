import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngoingRoutingModule } from './ongoing-routing.module';
import { OngoingComponent } from './ongoing.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    OngoingComponent
  ],
  imports: [
    CommonModule,
    OngoingRoutingModule,
    sharedModule
  ]
})
export class OngoingModule { }
