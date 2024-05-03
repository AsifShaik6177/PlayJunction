import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CageCheckoutComponent } from './cage-checkout.component';

const routes: Routes = [{ path: '', component: CageCheckoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CageCheckoutRoutingModule { }
