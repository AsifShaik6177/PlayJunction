import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CagePersonalInfoRoutingModule } from './cage-personal-info-routing.module';
import { CagePersonalInfoComponent } from './cage-personal-info.component';


@NgModule({
  declarations: [
    CagePersonalInfoComponent
  ],
  imports: [
    CommonModule,
    CagePersonalInfoRoutingModule
  ]
})
export class CagePersonalInfoModule { }
