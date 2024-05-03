import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingLessonComponent } from './setting-lesson.component';

const routes: Routes = [{ path: '', component: SettingLessonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingLessonRoutingModule { }
