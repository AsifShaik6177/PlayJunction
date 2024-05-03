import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachesGridSidebarComponent } from './coaches-grid-sidebar.component';

const routes: Routes = [{ path: '', component: CoachesGridSidebarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachesGridSidebarRoutingModule { }
