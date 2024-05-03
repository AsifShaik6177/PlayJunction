import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialsCarouselComponent } from './testimonials-carousel.component';

const routes: Routes = [{ path: '', component: TestimonialsCarouselComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonialsCarouselRoutingModule { }
