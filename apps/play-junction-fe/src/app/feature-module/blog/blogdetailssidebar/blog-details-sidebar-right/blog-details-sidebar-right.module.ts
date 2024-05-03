import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsSidebarRightRoutingModule } from './blog-details-sidebar-right-routing.module';
import { BlogDetailsSidebarRightComponent } from './blog-details-sidebar-right.component';
import { sharedModule } from '../../../../shared/shared.module';
import { FeatherIconModule } from '../../../../shared/model/feather.module';


@NgModule({
  declarations: [
    BlogDetailsSidebarRightComponent
  ],
  imports: [
    CommonModule,
    BlogDetailsSidebarRightRoutingModule,
    sharedModule,
    FeatherIconModule
  ]
})
export class BlogDetailsSidebarRightModule { }
