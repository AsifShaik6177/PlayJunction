import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCourtComponent } from './book-court.component';

const routes: Routes = [{ path: '', component: BookCourtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookCourtRoutingModule { }
