import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenueDetailsRoutingModule } from './venue-details-routing.module';
import { VenueDetailsComponent } from './venue-details.component';
import { sharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    VenueDetailsComponent
  ],
  imports: [
    CommonModule,
    VenueDetailsRoutingModule,
    sharedModule,
  ]
})
export class VenueDetailsModule { }
