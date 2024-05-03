import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachesListComponent } from './coaches-list.component';

const routes: Routes = [{ path: '', component: CoachesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachesListRoutingModule { }
