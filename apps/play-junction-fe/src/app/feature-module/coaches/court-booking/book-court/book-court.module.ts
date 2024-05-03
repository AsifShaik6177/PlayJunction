import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { BookCourtRoutingModule } from './book-court-routing.module';
import { BookCourtComponent } from './book-court.component';
import { sharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    BookCourtComponent
  ],
  imports: [
    CommonModule,
    BookCourtRoutingModule,
    sharedModule,
  ],
  providers: [
    DatePipe,
  ]
})
export class BookCourtModule { }
