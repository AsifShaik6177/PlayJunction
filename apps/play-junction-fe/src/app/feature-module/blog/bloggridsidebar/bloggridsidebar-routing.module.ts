import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloggridsidebarComponent } from './bloggridsidebar.component';

const routes: Routes = [
  { path: '', component: BloggridsidebarComponent ,children:[
    {
      path: 'blog-grid-sidebar-left',
      loadChildren: () =>
        import('./blog-grid-sidebar-left/blog-grid-sidebar-left.module').then(
          (m) => m.BlogGridSidebarLeftModule
        ),
    },
    {
      path: 'blog-grid-sidebar-right',
      loadChildren: () =>
        import('./blog-grid-sidebar-right/blog-grid-sidebar-right.module').then(
          (m) => m.BlogGridSidebarRightModule
        ),
    },
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloggridsidebarRoutingModule {}
