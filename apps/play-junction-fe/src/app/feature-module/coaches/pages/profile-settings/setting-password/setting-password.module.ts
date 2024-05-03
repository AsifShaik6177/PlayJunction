import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingPasswordRoutingModule } from './setting-password-routing.module';
import { SettingPasswordComponent } from './setting-password.component';


@NgModule({
  declarations: [
    SettingPasswordComponent
  ],
  imports: [
    CommonModule,
    SettingPasswordRoutingModule
  ]
})
export class SettingPasswordModule { }
