import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogCarouselRoutingModule } from './blog-carousel-routing.module';
import { BlogCarouselComponent } from './blog-carousel.component';
import { sharedModule } from '../../../shared/shared.module';
import { FeatherIconModule } from '../../../shared/model/feather.module';


@NgModule({
  declarations: [
    BlogCarouselComponent
  ],
  imports: [
    CommonModule,
    BlogCarouselRoutingModule,
    sharedModule,
    FeatherIconModule
  ]
})
export class BlogCarouselModule { }
