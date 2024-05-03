import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachDashboardComponent } from './coach-dashboard.component';

const routes: Routes = [{ path: '', component: CoachDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachDashboardRoutingModule { }
