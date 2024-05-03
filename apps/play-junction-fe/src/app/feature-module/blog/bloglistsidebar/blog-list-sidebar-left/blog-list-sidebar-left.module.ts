import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListSidebarLeftRoutingModule } from './blog-list-sidebar-left-routing.module';
import { BlogListSidebarLeftComponent } from './blog-list-sidebar-left.component';
import { FeatherIconModule } from '../../../../shared/model/feather.module';


@NgModule({
  declarations: [
    BlogListSidebarLeftComponent
  ],
  imports: [
    CommonModule,
    BlogListSidebarLeftRoutingModule,
    FeatherIconModule 
  ]
})
export class BlogListSidebarLeftModule { }
