import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonTimedateRoutingModule } from './lesson-timedate-routing.module';
import { LessonTimedateComponent } from './lesson-timedate.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    LessonTimedateComponent
  ],
  imports: [
    CommonModule,
    LessonTimedateRoutingModule,
    sharedModule
  ]
})
export class LessonTimedateModule { }
