import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      {
        path: 'error404',
        loadChildren: () =>
          import('./error404/error404.module').then((m) => m.Error404Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
