import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingMapRoutingModule } from './listing-map-routing.module';
import { ListingMapComponent } from './listing-map.component';
import { sharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    ListingMapComponent,
   
  ],
  imports: [
    CommonModule,
    ListingMapRoutingModule,
    sharedModule,
    
  ]
})
export class ListingMapModule { }
