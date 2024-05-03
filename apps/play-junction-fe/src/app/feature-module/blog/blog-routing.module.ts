import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'blog-list',
        loadChildren: () =>
          import('./blog-list/blog-list.module').then((m) => m.BlogListModule),
      },
      {
        path: 'blog-grid',
        loadChildren: () =>
          import('./blog-grid/blog-grid.module').then((m) => m.BlogGridModule),
      },
      {
        path: 'blog-carousel',
        loadChildren: () =>
          import('./blog-carousel/blog-carousel.module').then(
            (m) => m.BlogCarouselModule
          ),
      },
      {
        path: 'blog-details',
        loadChildren: () =>
          import('./blog-details/blog-details.module').then(
            (m) => m.BlogDetailsModule
          ),
      },
      {
        path: 'bloglistsidebar',
        loadChildren: () =>
          import('./bloglistsidebar/bloglistsidebar.module').then(
            (m) => m.BloglistsidebarModule
          ),
      },
      {
        path: 'bloggridsidebar',
        loadChildren: () =>
          import('./bloggridsidebar/bloggridsidebar.module').then(
            (m) => m.BloggridsidebarModule
          ),
      },
      {
        path: 'blogdetailssidebar',
        loadChildren: () =>
          import('./blogdetailssidebar/blogdetailssidebar.module').then(
            (m) => m.BlogdetailssidebarModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
