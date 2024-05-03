import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CageRoutingModule } from './cage-routing.module';
import { CageComponent } from './cage.component';
import { sharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    CageComponent
  ],
  imports: [
    CommonModule,
    CageRoutingModule,
    sharedModule
  ]
})
export class CageModule { }
