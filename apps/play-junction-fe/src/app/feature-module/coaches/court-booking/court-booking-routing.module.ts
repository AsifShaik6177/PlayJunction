import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourtBookingComponent } from './court-booking.component';

const routes: Routes = [
  {
    path: '',
    component: CourtBookingComponent,
    children: [
      {
        path: 'book-court/:eventId',
        loadChildren: () =>
          import('./book-court/book-court.module').then(
            (m) => m.BookCourtModule
          ),
      },
      {
        path: 'book-court',
        loadChildren: () =>
          import('./book-court/book-court.module').then(
            (m) => m.BookCourtModule
          ),
      },
      {
        path: 'book-confirm/:eventId',
        loadChildren: () =>
          import('./book-confirm/book-confirm.module').then(
            (m) => m.BookConfirmModule
          ),
      },
      {
        path: 'book-confirm',
        loadChildren: () =>
          import('./book-confirm/book-confirm.module').then(
            (m) => m.BookConfirmModule
          ),
      },
      {
        path: 'personal-info',
        loadChildren: () =>
          import('./personal-info/personal-info.module').then(
            (m) => m.PersonalInfoModule
          ),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourtBookingRoutingModule {}
