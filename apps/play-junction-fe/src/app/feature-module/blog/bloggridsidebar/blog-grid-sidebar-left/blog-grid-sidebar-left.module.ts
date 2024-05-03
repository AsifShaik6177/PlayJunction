import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridSidebarLeftRoutingModule } from './blog-grid-sidebar-left-routing.module';
import { BlogGridSidebarLeftComponent } from './blog-grid-sidebar-left.component';
import { FeatherIconModule } from '../../../../shared/model/feather.module';


@NgModule({
  declarations: [
    BlogGridSidebarLeftComponent
  ],
  imports: [
    CommonModule,
    BlogGridSidebarLeftRoutingModule,
    FeatherIconModule
  ]
})
export class BlogGridSidebarLeftModule { }
