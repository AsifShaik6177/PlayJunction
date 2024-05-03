import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGridSidebarRightComponent } from './blog-grid-sidebar-right.component';

const routes: Routes = [{ path: '', component: BlogGridSidebarRightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogGridSidebarRightRoutingModule { }
