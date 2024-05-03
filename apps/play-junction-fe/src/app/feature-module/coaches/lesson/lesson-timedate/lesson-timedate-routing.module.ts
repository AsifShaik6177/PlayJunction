import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonTimedateComponent } from './lesson-timedate.component';

const routes: Routes = [{ path: '', component: LessonTimedateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonTimedateRoutingModule { }
