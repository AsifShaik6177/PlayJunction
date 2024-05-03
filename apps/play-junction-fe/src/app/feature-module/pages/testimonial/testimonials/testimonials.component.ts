import { Component } from '@angular/core';
import { routes } from '../../../../core/helpers/routes';
import { testimonials } from '../../../../core/models/models';
import { DataService } from '../../../../core/service/data/data.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  public routes=routes
  public testimonials:testimonials [] = [];
  constructor (private dataservice:DataService){
    this.testimonials= this.dataservice.testimonials }
}
