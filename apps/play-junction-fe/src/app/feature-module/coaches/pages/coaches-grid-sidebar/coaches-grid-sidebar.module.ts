import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachesGridSidebarRoutingModule } from './coaches-grid-sidebar-routing.module';
import { CoachesGridSidebarComponent } from './coaches-grid-sidebar.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CoachesGridSidebarComponent
  ],
  imports: [
    CommonModule,
    CoachesGridSidebarRoutingModule,
    sharedModule
  ]
})
export class CoachesGridSidebarModule { }
