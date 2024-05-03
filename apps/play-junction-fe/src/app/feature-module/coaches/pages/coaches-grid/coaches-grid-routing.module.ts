import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachesGridComponent } from './coaches-grid.component';

const routes: Routes = [{ path: '', component: CoachesGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachesGridRoutingModule { }
