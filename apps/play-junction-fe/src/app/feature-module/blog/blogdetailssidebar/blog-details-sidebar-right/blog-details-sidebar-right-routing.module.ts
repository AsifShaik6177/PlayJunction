import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsSidebarRightComponent } from './blog-details-sidebar-right.component';

const routes: Routes = [{ path: '', component: BlogDetailsSidebarRightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogDetailsSidebarRightRoutingModule { }
