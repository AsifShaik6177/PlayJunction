import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonOrderConfirmRoutingModule } from './lesson-order-confirm-routing.module';
import { LessonOrderConfirmComponent } from './lesson-order-confirm.component';


@NgModule({
  declarations: [
    LessonOrderConfirmComponent
  ],
  imports: [
    CommonModule,
    LessonOrderConfirmRoutingModule
  ]
})
export class LessonOrderConfirmModule { }
