import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloggridsidebarRoutingModule } from './bloggridsidebar-routing.module';
import { BloggridsidebarComponent } from './bloggridsidebar.component';


@NgModule({
  declarations: [
    BloggridsidebarComponent
  ],
  imports: [
    CommonModule,
    BloggridsidebarRoutingModule
  ]
})
export class BloggridsidebarModule { }
