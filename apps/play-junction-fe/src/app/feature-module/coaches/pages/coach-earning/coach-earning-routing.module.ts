import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachEarningComponent } from './coach-earning.component';

const routes: Routes = [{ path: '', component: CoachEarningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachEarningRoutingModule { }
