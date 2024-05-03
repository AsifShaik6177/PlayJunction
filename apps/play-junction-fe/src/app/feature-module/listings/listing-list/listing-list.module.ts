import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingListRoutingModule } from './listing-list-routing.module';
import { ListingListComponent } from './listing-list.component';
import { sharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ListingListComponent
  ],
  imports: [
    CommonModule,
    ListingListRoutingModule,
    sharedModule
  ]
})
export class ListingListModule { }
