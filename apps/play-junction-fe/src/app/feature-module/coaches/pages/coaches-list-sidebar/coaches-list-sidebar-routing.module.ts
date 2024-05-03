import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachesListSidebarComponent } from './coaches-list-sidebar.component';

const routes: Routes = [{ path: '', component: CoachesListSidebarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachesListSidebarRoutingModule { }
