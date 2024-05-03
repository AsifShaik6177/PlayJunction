import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CagePersonalInfoComponent } from './cage-personal-info.component';

const routes: Routes = [{ path: '', component: CagePersonalInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CagePersonalInfoRoutingModule { }
