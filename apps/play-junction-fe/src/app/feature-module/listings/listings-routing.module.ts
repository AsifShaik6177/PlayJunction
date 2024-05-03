import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings.component';

const routes: Routes = [
  { path: '', component: ListingsComponent ,children:[
    {
      path: 'listing-grid',
      loadChildren: () =>
        import('./listing-grid/listing-grid.module').then(
          (m) => m.ListingGridModule
        ),
    },
    {
      path: 'listing-grid-sidebar',
      loadChildren: () =>
        import('./listing-grid-sidebar/listing-grid-sidebar.module').then(
          (m) => m.ListingGridSidebarModule
        ),
    },
    {
      path: 'listing-list',
      loadChildren: () =>
        import('./listing-list/listing-list.module').then(
          (m) => m.ListingListModule
        ),
    },
    {
      path: 'listing-list-sidebar',
      loadChildren: () =>
        import('./listing-list-sidebar/listing-list-sidebar.module').then(
          (m) => m.ListingListSidebarModule
        ),
    },
    {
      path: 'listing-map',
      loadChildren: () =>
        import('./listing-map/listing-map.module').then(
          (m) => m.ListingMapModule
        ),
    },
    {
      path: 'listing-map-sidebar',
      loadChildren: () =>
        import('./listing-map-sidebar/listing-map-sidebar.module').then(
          (m) => m.ListingMapSidebarModule
        ),
    }, 

    
]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingsRoutingModule {}
