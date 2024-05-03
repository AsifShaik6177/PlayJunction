import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridRoutingModule } from './blog-grid-routing.module';
import { BlogGridComponent } from './blog-grid.component';
import { sharedModule } from '../../../shared/shared.module';
import { FeatherIconModule } from '../../../shared/model/feather.module';


@NgModule({
  declarations: [
    BlogGridComponent
  ],
  imports: [
    CommonModule,
    BlogGridRoutingModule,
    sharedModule,
    FeatherIconModule
  ]
})
export class BlogGridModule { }
