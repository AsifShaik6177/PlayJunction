import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingGridSidebarRoutingModule } from './listing-grid-sidebar-routing.module';
import { ListingGridSidebarComponent } from './listing-grid-sidebar.component';
import { sharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ListingGridSidebarComponent
  ],
  imports: [
    CommonModule,
    ListingGridSidebarRoutingModule,
    sharedModule
  ]
})
export class ListingGridSidebarModule { }
