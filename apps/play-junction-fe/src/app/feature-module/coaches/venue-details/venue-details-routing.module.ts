import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenueDetailsComponent } from './venue-details.component';

const routes: Routes = [{ path: '', component: VenueDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueDetailsRoutingModule { }
