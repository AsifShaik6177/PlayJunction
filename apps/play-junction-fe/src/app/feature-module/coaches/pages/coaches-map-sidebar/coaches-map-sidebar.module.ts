import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachesMapSidebarRoutingModule } from './coaches-map-sidebar-routing.module';
import { CoachesMapSidebarComponent } from './coaches-map-sidebar.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CoachesMapSidebarComponent
  ],
  imports: [
    CommonModule,
    CoachesMapSidebarRoutingModule,
    sharedModule
  ]
})
export class CoachesMapSidebarModule { }
