import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { brandlogos } from '../../../core/core.index';
import { routes } from '../../../core/helpers/routes';
import { DataService } from '../../../core/service/data/data.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  public routes=routes;
  public brandlogos:brandlogos [] = [];
  constructor (private dataservice:DataService){
    this.brandlogos= this.dataservice.brandlogos  
  }

public universitiesCompaniesOwlOptions: OwlOptions = {
  margin: 24,
  nav: false,
  loop: true,
  dots:false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 5,
    },
    1170: {
      items: 5,
    },
  },
};
}
