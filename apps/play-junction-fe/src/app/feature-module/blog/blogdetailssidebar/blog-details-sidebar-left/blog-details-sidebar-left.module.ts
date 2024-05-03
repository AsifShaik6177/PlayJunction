import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsSidebarLeftRoutingModule } from './blog-details-sidebar-left-routing.module';
import { BlogDetailsSidebarLeftComponent } from './blog-details-sidebar-left.component';
import { sharedModule } from '../../../../shared/shared.module';
import { FeatherIconModule } from '../../../../shared/model/feather.module';


@NgModule({
  declarations: [
    BlogDetailsSidebarLeftComponent
  ],
  imports: [
    CommonModule,
    BlogDetailsSidebarLeftRoutingModule,
    sharedModule,
    FeatherIconModule
    
  ]
})
export class BlogDetailsSidebarLeftModule { }
