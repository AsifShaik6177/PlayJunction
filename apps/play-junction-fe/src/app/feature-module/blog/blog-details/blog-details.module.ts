import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogDetailsComponent } from './blog-details.component';
import { sharedModule } from '../../../shared/shared.module';
import { FeatherIconModule } from '../../../shared/model/feather.module';



@NgModule({
  declarations: [
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogDetailsRoutingModule,
    sharedModule,
    FeatherIconModule
  ]
})
export class BlogDetailsModule { }
