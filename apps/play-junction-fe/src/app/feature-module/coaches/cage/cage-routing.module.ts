import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CageComponent } from './cage.component';

const routes: Routes = [
  {
    path: '',
    component: CageComponent,
    children: [
      {
        path: 'cage-checkout',
        loadChildren: () =>
          import('./cage-checkout/cage-checkout.module').then(
            (m) => m.CageCheckoutModule
          ),
      },
      {
        path: 'cage-details',
        loadChildren: () =>
          import('./cage-details/cage-details.module').then(
            (m) => m.CageDetailsModule
          ),
      },
      {
        path: 'cage-order-confirm',
        loadChildren: () =>
          import('./cage-order-confirm/cage-order-confirm.module').then(
            (m) => m.CageOrderConfirmModule
          ),
      },
      {
        path: 'cage-personal-info',
        loadChildren: () =>
          import('./cage-personal-info/cage-personal-info.module').then(
            (m) => m.CagePersonalInfoModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CageRoutingModule {}
