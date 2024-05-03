import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'chat',
        loadChildren: () =>
          import('./coach-chat/coach-chat.module').then(
            (m) => m.CoachChatModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./coach-dashboard/coach-dashboard.module').then(
            (m) => m.CoachDashboardModule
          ),
      },
      {
        path: 'requests',
        loadChildren: () =>
          import('./coach-request/coach-request.module').then(
            (m) => m.CoachRequestModule
          ),
      },

      {
        path: 'wallet',
        loadChildren: () =>
          import('./coach-wallet/coach-wallet.module').then(
            (m) => m.CoachWalletModule
          ),
      },
      {
        path: 'earnings',
        loadChildren: () =>
          import('./coach-earning/coach-earning.module').then(
            (m) => m.CoachEarningModule
          ),
      },
      {
        path: 'courts',
        loadChildren: () =>
          import('./coach-courts/coach-courts.module').then(
            (m) => m.CoachCourtsModule
          ),
      },
      {
        path: 'profile-settings',
        loadChildren: () =>
          import('./profile-settings/profile-settings.module').then(
            (m) => m.ProfileSettingsModule
          ),
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('./booking/booking.module').then((m) => m.BookingModule),
      },
      {
        path: 'invoice',
        loadChildren: () =>
          import('./invoice/invoice.module').then((m) => m.InvoiceModule),
      },
      {
        path: 'coaches-grid-sidebar',
        loadChildren: () =>
          import('./coaches-grid-sidebar/coaches-grid-sidebar.module').then(
            (m) => m.CoachesGridSidebarModule
          ),
      },
      {
        path: 'coaches-grid',
        loadChildren: () =>
          import('./coaches-grid/coaches-grid.module').then(
            (m) => m.CoachesGridModule
          ),
      },
      {
        path: 'coaches-list-sidebar',
        loadChildren: () =>
          import('./coaches-list-sidebar/coaches-list-sidebar.module').then(
            (m) => m.CoachesListSidebarModule
          ),
      },
      {
        path: 'coaches-list-without-sidebar',
        loadChildren: () =>
          import('./coaches-list/coaches-list.module').then(
            (m) => m.CoachesListModule
          ),
      },
      {
        path: 'coaches-map-sidebar',
        loadChildren: () =>
          import('./coaches-map-sidebar/coaches-map-sidebar.module').then(
            (m) => m.CoachesMapSidebarModule
          ),
      },
      {
        path: 'coaches-map',
        loadChildren: () =>
          import('./coaches-map/coaches-map.module').then(
            (m) => m.CoachesMapModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
