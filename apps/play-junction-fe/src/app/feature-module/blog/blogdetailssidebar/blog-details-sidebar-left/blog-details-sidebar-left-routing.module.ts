import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsSidebarLeftComponent } from './blog-details-sidebar-left.component';

const routes: Routes = [{ path: '', component: BlogDetailsSidebarLeftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogDetailsSidebarLeftRoutingModule { }
