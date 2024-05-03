import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridSidebarRightRoutingModule } from './blog-grid-sidebar-right-routing.module';
import { BlogGridSidebarRightComponent } from './blog-grid-sidebar-right.component';


@NgModule({
  declarations: [
    BlogGridSidebarRightComponent
  ],
  imports: [
    CommonModule,
    BlogGridSidebarRightRoutingModule
  ]
})
export class BlogGridSidebarRightModule { }
