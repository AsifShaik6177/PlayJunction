import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonOrderConfirmComponent } from './lesson-order-confirm.component';

const routes: Routes = [{ path: '', component: LessonOrderConfirmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonOrderConfirmRoutingModule { }
