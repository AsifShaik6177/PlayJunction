import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngoingComponent } from './ongoing.component';

const routes: Routes = [{ path: '', component: OngoingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OngoingRoutingModule { }
