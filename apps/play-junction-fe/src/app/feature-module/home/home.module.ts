import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { sharedModule} from '../../shared/shared.index';
import { FeatherIconModule } from '../../shared/model/feather.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    sharedModule,
    FeatherIconModule
  ]
})
export class HomeModule { }
