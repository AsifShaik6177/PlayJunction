import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListSidebarRightComponent } from './blog-list-sidebar-right.component';

const routes: Routes = [{ path: '', component: BlogListSidebarRightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogListSidebarRightRoutingModule { }
