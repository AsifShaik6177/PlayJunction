import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachPaymentComponent } from './coach-payment.component';

const routes: Routes = [{ path: '', component: CoachPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachPaymentRoutingModule { }
