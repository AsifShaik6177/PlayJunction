import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingMapSidebarRoutingModule } from './listing-map-sidebar-routing.module';
import { ListingMapSidebarComponent } from './listing-map-sidebar.component';
import { sharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ListingMapSidebarComponent
  ],
  imports: [
    CommonModule,
    ListingMapSidebarRoutingModule,
    sharedModule
  ]
})
export class ListingMapSidebarModule { }
