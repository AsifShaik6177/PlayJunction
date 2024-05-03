import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingsRoutingModule } from './listings-routing.module';
import { ListingsComponent } from './listings.component';
import { sharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [
    ListingsComponent
   
   
  ],
  imports: [
    CommonModule,
    ListingsRoutingModule,
    sharedModule,
    
    
  ],
  
})
export class ListingsModule { }
