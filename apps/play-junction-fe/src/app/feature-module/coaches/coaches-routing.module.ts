import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachesComponent } from './coaches.component';

const routes: Routes = [
  {
    path: '',
    component: CoachesComponent,
    children: [
      {
        path: 'coach-detail',
        loadChildren: () =>
          import('./coach-detail/coach-detail.module').then(
            (m) => m.CoachDetailModule
          ),
      },
     
      {
        path: 'earning-coaching',
        loadChildren: () =>
          import('./earning-coaching/earning-coaching.module').then(
            (m) => m.EarningCoachingModule
          ),
      },
      {
        path: 'court-booking',
        loadChildren: () =>
          import('./court-booking/court-booking.module').then(
            (m) => m.CourtBookingModule
          ),
      },
      {
        path: 'venue-details/:eventId',
        loadChildren: () =>
          import('./venue-details/venue-details.module').then((m) => (m).VenueDetailsModule)
      },
      {
        path: 'venue-details',
        loadChildren: () =>
          import('./venue-details/venue-details.module').then((m) => (m).VenueDetailsModule)
      },
    ],
  },
  {
    path: 'booking-steps',
    loadChildren: () =>
      import('./booking-steps/booking-steps.module').then(
        (m) => m.BookingStepsModule
      ),
  },
  {
    path: 'lesson',
    loadChildren: () =>
      import('./lesson/lesson.module').then((m) => m.LessonModule),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'add-court',
    loadChildren: () =>
      import('./add-court/add-court.module').then((m) => m.AddCourtModule),
  },
  { path: 'cage', loadChildren: () => import('./cage/cage.module').then(m => m.CageModule) },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachesRoutingModule {}
