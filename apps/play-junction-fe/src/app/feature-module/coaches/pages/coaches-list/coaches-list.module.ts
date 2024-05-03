import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachesListRoutingModule } from './coaches-list-routing.module';
import { CoachesListComponent } from './coaches-list.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CoachesListComponent
  ],
  imports: [
    CommonModule,
    CoachesListRoutingModule,
    sharedModule
  ]
})
export class CoachesListModule { }
