import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingMapSidebarComponent } from './listing-map-sidebar.component';

const routes: Routes = [{ path: '', component: ListingMapSidebarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingMapSidebarRoutingModule { }
