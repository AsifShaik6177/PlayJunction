import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGridSidebarLeftComponent } from './blog-grid-sidebar-left.component';

const routes: Routes = [{ path: '', component: BlogGridSidebarLeftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogGridSidebarLeftRoutingModule { }
