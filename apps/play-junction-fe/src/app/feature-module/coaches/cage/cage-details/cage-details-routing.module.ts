import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CageDetailsComponent } from './cage-details.component';

const routes: Routes = [{ path: '', component: CageDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CageDetailsRoutingModule { }
