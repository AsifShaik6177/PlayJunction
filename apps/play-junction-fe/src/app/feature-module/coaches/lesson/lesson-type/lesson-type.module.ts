import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonTypeRoutingModule } from './lesson-type-routing.module';
import { LessonTypeComponent } from './lesson-type.component';


@NgModule({
  declarations: [
    LessonTypeComponent
  ],
  imports: [
    CommonModule,
    LessonTypeRoutingModule
  ]
})
export class LessonTypeModule { }
