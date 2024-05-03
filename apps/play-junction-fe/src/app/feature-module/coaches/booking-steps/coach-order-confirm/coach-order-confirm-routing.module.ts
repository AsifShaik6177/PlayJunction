import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachOrderConfirmComponent } from './coach-order-confirm.component';

const routes: Routes = [{ path: '', component: CoachOrderConfirmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachOrderConfirmRoutingModule { }
