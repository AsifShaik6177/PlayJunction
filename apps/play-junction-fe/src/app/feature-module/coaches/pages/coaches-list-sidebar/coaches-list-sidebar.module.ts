import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachesListSidebarRoutingModule } from './coaches-list-sidebar-routing.module';
import { CoachesListSidebarComponent } from './coaches-list-sidebar.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CoachesListSidebarComponent
  ],
  imports: [
    CommonModule,
    CoachesListSidebarRoutingModule,
    sharedModule
  ]
})
export class CoachesListSidebarModule { }
