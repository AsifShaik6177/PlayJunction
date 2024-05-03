import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourtComponent } from './add-court.component';

const routes: Routes = [{ path: '', component: AddCourtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCourtRoutingModule { }
