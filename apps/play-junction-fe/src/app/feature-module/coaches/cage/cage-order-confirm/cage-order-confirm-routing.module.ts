import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CageOrderConfirmComponent } from './cage-order-confirm.component';

const routes: Routes = [{ path: '', component: CageOrderConfirmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CageOrderConfirmRoutingModule { }
