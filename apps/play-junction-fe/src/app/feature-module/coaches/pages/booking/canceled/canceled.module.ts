import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanceledRoutingModule } from './canceled-routing.module';
import { CanceledComponent } from './canceled.component';
import { sharedModule } from '../../../../../shared/shared.module';


@NgModule({
  declarations: [
    CanceledComponent
  ],
  imports: [
    CommonModule,
    CanceledRoutingModule,
    sharedModule
  ]
})
export class CanceledModule { }
