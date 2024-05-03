import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [
      {
        path: 'coach-booking',
        loadChildren: () =>
          import('./coach-booking/coach-booking.module').then(
            (m) => m.CoachBookingModule
          ),
      },
      {
        path: 'completed',
        loadChildren: () =>
          import('./completed/completed.module').then((m) => m.CompletedModule),
      },
      {
        path: 'canceled',
        loadChildren: () =>
          import('./canceled/canceled.module').then(
            (m) => m.CanceledModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
