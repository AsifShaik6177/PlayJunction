import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachBookingComponent } from './coach-booking.component';

const routes: Routes = [{ path: '', component: CoachBookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachBookingRoutingModule { }
