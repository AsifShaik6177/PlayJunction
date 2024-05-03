import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { sharedModule } from '../../../shared/shared.module';
import { FeatherIconModule } from '../../../shared/model/feather.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    sharedModule,
    FeatherIconModule
  ]
})
export class RegisterModule { }
