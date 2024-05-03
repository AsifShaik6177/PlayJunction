import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachCourtsComponent } from './coach-courts.component';

const routes: Routes = [
  {
    path: '',
    component: CoachCourtsComponent,
    children: [
      {
        path: 'all-courts',
        loadChildren: () =>
          import('./all-courts/all-courts.module').then(
            (m) => m.AllCourtsModule
          ),
      },
      {
        path: 'court-active',
        loadChildren: () =>
          import('./court-active/court-active.module').then(
            (m) => m.CourtActiveModule
          ),
      },
      {
        path: 'court-inactive',
        loadChildren: () =>
          import('./court-inactive/court-inactive.module').then(
            (m) => m.CourtInactiveModule
          ),
      }
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachCourtsRoutingModule {}
