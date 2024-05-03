import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { HeaderComponent } from './common-component/header/header.component';
import { FooterComponent } from './common-component/footer/footer.component';
import { sharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FeatureModuleComponent,HeaderComponent, FooterComponent
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,
    sharedModule
  ]
})
export class FeatureModuleModule { }
