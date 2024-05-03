import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourtActiveComponent } from './court-active.component';

const routes: Routes = [{ path: '', component: CourtActiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourtActiveRoutingModule { }
