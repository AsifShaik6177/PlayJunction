import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachPersonalinfoComponent } from './coach-personalinfo.component';

const routes: Routes = [{ path: '', component: CoachPersonalinfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachPersonalinfoRoutingModule { }
