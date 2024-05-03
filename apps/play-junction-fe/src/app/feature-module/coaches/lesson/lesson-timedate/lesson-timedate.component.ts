import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService, routes } from '../../../../core/core.index';
import { coachTimeDate } from '../../../../shared/model/page.model';

@Component({
  selector: 'app-lesson-timedate',
  templateUrl: './lesson-timedate.component.html',
  styleUrls: ['./lesson-timedate.component.scss']
})
export class LessonTimedateComponent {
  actives = true;
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
    isActive: boolean = true; 
    isChecked: boolean = true; 
    
  
    timeSlots = [
      { time: '5:00 PM', isActive: false, isChecked: false },
      { time: '5:00 PM', isActive: false, isChecked: false },
      { time: '5:00 PM', isActive: true, isChecked: false },
      { time: '5:00 PM', isActive: false, isChecked: false },
      { time: '6:00 PM', isActive: true, isChecked: false },
      { time: '6:00 PM', isActive: true, isChecked: false },
      { time: '6:00 PM', isActive: true, isChecked: false },
      { time: '6:00 PM', isActive: true, isChecked: true },
      { time: '7:00 PM', isActive: true, isChecked: false },
      { time: '7:00 PM', isActive: true, isChecked: true },
      { time: '7:00 PM', isActive: true, isChecked: false },
      { time: '7:00 PM', isActive: true, isChecked: false }
     
    ];
  
    toggleChecked(index: any): void {
      this.timeSlots[index].isChecked = !this.timeSlots[index].isChecked; // Toggle the checked state of the clicked time slot
    }
  }

