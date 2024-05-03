import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonTypeComponent } from './lesson-type.component';

const routes: Routes = [{ path: '', component: LessonTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonTypeRoutingModule { }
