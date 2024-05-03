import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersettingRoutingModule } from './othersetting-routing.module';
import { OthersettingComponent } from './othersetting.component';
import { FeatherIconModule } from '../../../../../shared/model/feather.module';


@NgModule({
  declarations: [
    OthersettingComponent
  ],
  imports: [
    CommonModule,
    OthersettingRoutingModule,
    FeatherIconModule
  ]
})
export class OthersettingModule { }
