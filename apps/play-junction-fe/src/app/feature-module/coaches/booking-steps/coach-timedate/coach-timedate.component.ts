import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService, routes } from '../../../../core/core.index';
import { coachTimeDate } from '../../../../shared/model/page.model';

@Component({
  selector: 'app-coach-timedate',
  templateUrl: './coach-timedate.component.html',
  styleUrls: ['./coach-timedate.component.scss']
})
export class CoachTimedateComponent {
  public routes = routes;
  public coachTimeDate : coachTimeDate[] = []

  constructor (private dataservice:DataService){
    this.coachTimeDate = this.dataservice.coachTimeDate
  }
  public coachTimeDateOptions: OwlOptions = {
    loop:true,
			margin:24,
			nav:true,
			dots: false,
			autoplay:false,
			smartSpeed: 2000,
			navText : ["<i class='feather icon-chevron-left'></i>","<i class='feather icon-chevron-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				500:{
					items:4
				},
				768:{
					items:3
				},
				1000:{
					items:4
				}
      }
    }
}
