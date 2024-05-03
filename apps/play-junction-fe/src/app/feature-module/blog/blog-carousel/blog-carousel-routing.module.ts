import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCarouselComponent } from './blog-carousel.component';

const routes: Routes = [{ path: '', component: BlogCarouselComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogCarouselRoutingModule { }
