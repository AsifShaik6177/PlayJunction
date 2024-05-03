import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingListSidebarRoutingModule } from './listing-list-sidebar-routing.module';
import { ListingListSidebarComponent } from './listing-list-sidebar.component';
import { sharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ListingListSidebarComponent
  ],
  imports: [
    CommonModule,
    ListingListSidebarRoutingModule,
    sharedModule
  ]
})
export class ListingListSidebarModule { }
