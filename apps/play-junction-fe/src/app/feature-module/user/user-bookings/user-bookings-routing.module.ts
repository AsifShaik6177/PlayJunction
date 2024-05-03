import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBookingsComponent } from './user-bookings.component';

const routes: Routes = [{ path: '', component: UserBookingsComponent,
children: [
  {
    path: 'bookings',
    loadChildren: () =>
      import('../user-bookings/bookings/bookings.module').then(
        (m) => m.BookingsModule
      ),
  },
  {
    path: 'completed',
    loadChildren: () =>
      import('../user-bookings/completed/completed.module').then(
        (m) => m.CompletedModule
      ),
  },
  {
    path: 'ongoing',
    loadChildren: () =>
      import('./ongoing/ongoing.module').then((m) => m.OngoingModule),
  },
  {
    path: 'cancelled',
    loadChildren: () =>
      import('../user-bookings/cancelled/cancelled.module').then(
        (m) => m.CancelledModule
      ),
  },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBookingsRoutingModule { }
