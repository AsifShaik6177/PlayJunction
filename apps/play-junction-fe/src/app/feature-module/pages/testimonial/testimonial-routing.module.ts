import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialComponent } from './testimonial.component';

const routes: Routes = [
  {
    path: '',
    component: TestimonialComponent,
    children: [
      {
        path: 'testimonials-grid',
        loadChildren: () =>
          import('./testimonials/testimonials.module').then(
            (m) => m.TestimonialsModule
          ),
      },
      {
        path: 'testimonials-carousel',
        loadChildren: () =>
          import('./testimonials-carousel/testimonials-carousel.module').then(
            (m) => m.TestimonialsCarouselModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimonialRoutingModule {}
