import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachWalletRoutingModule } from './coach-wallet-routing.module';
import { CoachWalletComponent } from './coach-wallet.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    CoachWalletComponent
  ],
  imports: [
    CommonModule,
    CoachWalletRoutingModule,
    sharedModule
  ]
})
export class CoachWalletModule { }
