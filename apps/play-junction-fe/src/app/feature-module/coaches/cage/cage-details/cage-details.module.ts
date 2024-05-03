import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CageDetailsRoutingModule } from './cage-details-routing.module';
import { CageDetailsComponent } from './cage-details.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CageDetailsComponent
  ],
  imports: [
    CommonModule,
    CageDetailsRoutingModule,
    sharedModule
  ]
})
export class CageDetailsModule { }
