import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../../core/core.index';

@Component({
  selector: 'app-coach-details',
  templateUrl: './coach-details.component.html',
  styleUrls: ['./coach-details.component.scss']
})
export class CoachDetailsComponent {
  public routes = routes;
  activeTabIndex = 0;

  constructor(private router : Router){}
  activateTab(index: number) {
    this.activeTabIndex = index;
  }
  
  isTabActive(index: number) {
    return this.activeTabIndex === index;
  }
  reDirect(){
  if(this.activeTabIndex === 0){
    this.router.navigate([routes.coachTimeDate])
  }
  else{
    this.router.navigate([routes.lessonType])
  }
}
}