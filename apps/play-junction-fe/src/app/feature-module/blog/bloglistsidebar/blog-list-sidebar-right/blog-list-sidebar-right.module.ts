import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListSidebarRightRoutingModule } from './blog-list-sidebar-right-routing.module';
import { BlogListSidebarRightComponent } from './blog-list-sidebar-right.component';
import { FeatherIconModule } from '../../../../shared/model/feather.module';


@NgModule({
  declarations: [
    BlogListSidebarRightComponent
  ],
  imports: [
    CommonModule,
    BlogListSidebarRightRoutingModule,
    FeatherIconModule
  ]
})
export class BlogListSidebarRightModule { }
