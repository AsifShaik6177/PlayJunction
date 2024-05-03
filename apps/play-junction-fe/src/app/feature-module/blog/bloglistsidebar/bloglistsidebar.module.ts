import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloglistsidebarRoutingModule } from './bloglistsidebar-routing.module';
import { BloglistsidebarComponent } from './bloglistsidebar.component';


@NgModule({
  declarations: [
    BloglistsidebarComponent
  ],
  imports: [
    CommonModule,
    BloglistsidebarRoutingModule
  ]
})
export class BloglistsidebarModule { }
