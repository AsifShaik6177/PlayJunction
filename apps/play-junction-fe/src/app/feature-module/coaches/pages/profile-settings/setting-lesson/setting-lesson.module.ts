import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingLessonRoutingModule } from './setting-lesson-routing.module';
import { SettingLessonComponent } from './setting-lesson.component';


@NgModule({
  declarations: [
    SettingLessonComponent
  ],
  imports: [
    CommonModule,
    SettingLessonRoutingModule
  ]
})
export class SettingLessonModule { }
