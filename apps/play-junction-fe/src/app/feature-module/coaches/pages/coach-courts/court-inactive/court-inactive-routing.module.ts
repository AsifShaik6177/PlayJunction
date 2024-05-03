import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourtInactiveComponent } from './court-inactive.component';

const routes: Routes = [{ path: '', component: CourtInactiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourtInactiveRoutingModule { }
