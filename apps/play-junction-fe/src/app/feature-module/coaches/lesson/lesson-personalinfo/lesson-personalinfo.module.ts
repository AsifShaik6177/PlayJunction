import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonPersonalinfoRoutingModule } from './lesson-personalinfo-routing.module';
import { LessonPersonalinfoComponent } from './lesson-personalinfo.component';


@NgModule({
  declarations: [
    LessonPersonalinfoComponent
  ],
  imports: [
    CommonModule,
    LessonPersonalinfoRoutingModule
  ]
})
export class LessonPersonalinfoModule { }
