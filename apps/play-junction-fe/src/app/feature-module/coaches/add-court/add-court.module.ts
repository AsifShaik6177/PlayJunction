import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCourtRoutingModule } from './add-court-routing.module';
import { AddCourtComponent } from './add-court.component';
import { sharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    AddCourtComponent
  ],
  imports: [
    CommonModule,
    AddCourtRoutingModule,
    sharedModule
  ]
})
export class AddCourtModule { }
