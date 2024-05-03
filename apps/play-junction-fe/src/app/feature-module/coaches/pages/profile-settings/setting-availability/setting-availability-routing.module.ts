import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingAvailabilityComponent } from './setting-availability.component';

const routes: Routes = [{ path: '', component: SettingAvailabilityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingAvailabilityRoutingModule { }
