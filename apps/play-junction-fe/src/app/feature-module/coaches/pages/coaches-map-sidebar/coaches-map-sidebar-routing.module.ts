import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachesMapSidebarComponent } from './coaches-map-sidebar.component';

const routes: Routes = [{ path: '', component: CoachesMapSidebarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachesMapSidebarRoutingModule { }
