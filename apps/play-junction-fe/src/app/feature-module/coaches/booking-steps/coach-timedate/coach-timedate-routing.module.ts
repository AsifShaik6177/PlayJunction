import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachTimedateComponent } from './coach-timedate.component';

const routes: Routes = [{ path: '', component: CoachTimedateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachTimedateRoutingModule { }
