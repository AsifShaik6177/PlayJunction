import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistsidebarComponent } from './bloglistsidebar.component';

const routes: Routes = [
  { path: '', component: BloglistsidebarComponent ,children:[
    {
      path: 'blog-list-sidebar-left',
      loadChildren: () =>
        import('./blog-list-sidebar-left/blog-list-sidebar-left.module').then(
          (m) => m.BlogListSidebarLeftModule
        ),
    },
    {
      path: 'blog-list-sidebar-right',
      loadChildren: () =>
        import('./blog-list-sidebar-right/blog-list-sidebar-right.module').then(
          (m) => m.BlogListSidebarRightModule
        ),
    },

  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloglistsidebarRoutingModule {}
