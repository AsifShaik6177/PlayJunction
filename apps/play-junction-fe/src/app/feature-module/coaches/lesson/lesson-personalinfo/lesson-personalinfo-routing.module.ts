import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonPersonalinfoComponent } from './lesson-personalinfo.component';

const routes: Routes = [{ path: '', component: LessonPersonalinfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonPersonalinfoRoutingModule { }
