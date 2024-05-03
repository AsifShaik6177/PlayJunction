import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookConfirmRoutingModule } from './book-confirm-routing.module';
import { BookConfirmComponent } from './book-confirm.component';


@NgModule({
  declarations: [
    BookConfirmComponent
  ],
  imports: [
    CommonModule,
    BookConfirmRoutingModule
  ]
})
export class BookConfirmModule { }
