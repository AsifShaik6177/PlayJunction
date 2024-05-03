import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachDetailsComponent } from './coach-details.component';

const routes: Routes = [{ path: '', component: CoachDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachDetailsRoutingModule { }
