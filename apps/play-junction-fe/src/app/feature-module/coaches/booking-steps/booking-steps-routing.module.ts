import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingStepsComponent } from './booking-steps.component';

const routes: Routes = [{ path: '', component: BookingStepsComponent,
children : [
  {
    path: 'coach-details',
    loadChildren: () =>
      import('./coach-details/coach-details.module').then(
        (m) => (m).CoachDetailsModule
      ),
  },
  {
    path: 'coach-order-confirm',
    loadChildren: () =>
      import('./coach-order-confirm/coach-order-confirm.module').then(
        (m) => (m).CoachOrderConfirmModule
      ),
  },
  {
    path: 'coach-payment',
    loadChildren: () =>
      import('./coach-payment/coach-payment.module').then(
        (m) => (m).CoachPaymentModule
      ),
  },
  {
    path: 'coach-personalinfo',
    loadChildren: () =>
      import('./coach-personalinfo/coach-personalinfo.module').then(
        (m) => (m).CoachPersonalinfoModule
      ),
  },
  {
    path: 'coach-timedate',
    loadChildren: () =>
      import('./coach-timedate/coach-timedate.module').then(
        (m) => (m).CoachTimedateModule
      ),
  },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingStepsRoutingModule { }
