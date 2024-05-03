import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdetailssidebarComponent } from './blogdetailssidebar.component';

const routes: Routes = [
  { path: '', component: BlogdetailssidebarComponent ,children:[{
    path: 'blog-details-sidebar-left',
    loadChildren: () =>
      import(
        './blog-details-sidebar-left/blog-details-sidebar-left.module'
      ).then((m) => m.BlogDetailsSidebarLeftModule),
  },
  {
    path: 'blog-details-sidebar-right',
    loadChildren: () =>
      import(
        './blog-details-sidebar-right/blog-details-sidebar-right.module'
      ).then((m) => m.BlogDetailsSidebarRightModule),
  },
    
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogdetailssidebarRoutingModule {}
