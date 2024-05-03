import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogdetailssidebarRoutingModule } from './blogdetailssidebar-routing.module';
import { BlogdetailssidebarComponent } from './blogdetailssidebar.component';


@NgModule({
  declarations: [
    BlogdetailssidebarComponent
  ],
  imports: [
    CommonModule,
    BlogdetailssidebarRoutingModule
  ]
})
export class BlogdetailssidebarModule { }
