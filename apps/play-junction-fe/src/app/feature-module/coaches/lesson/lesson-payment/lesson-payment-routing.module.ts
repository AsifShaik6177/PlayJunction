import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonPaymentComponent } from './lesson-payment.component';

const routes: Routes = [{ path: '', component: LessonPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonPaymentRoutingModule { }
