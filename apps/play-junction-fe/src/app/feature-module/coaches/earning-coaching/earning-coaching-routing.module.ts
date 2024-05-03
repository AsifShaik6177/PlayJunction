import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarningCoachingComponent } from './earning-coaching.component';

const routes: Routes = [{ path: '', component: EarningCoachingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarningCoachingRoutingModule { }
