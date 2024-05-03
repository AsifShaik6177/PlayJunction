import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListSidebarLeftComponent } from './blog-list-sidebar-left.component';

const routes: Routes = [{ path: '', component: BlogListSidebarLeftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogListSidebarLeftRoutingModule { }
