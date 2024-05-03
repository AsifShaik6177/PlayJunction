import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsCarouselRoutingModule } from './testimonials-carousel-routing.module';
import { TestimonialsCarouselComponent } from './testimonials-carousel.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    TestimonialsCarouselComponent
  ],
  imports: [
    CommonModule,
    TestimonialsCarouselRoutingModule,
    sharedModule
  ]
})
export class TestimonialsCarouselModule { }
