import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OthersettingComponent } from './othersetting.component';

const routes: Routes = [{ path: '', component: OthersettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersettingRoutingModule { }
