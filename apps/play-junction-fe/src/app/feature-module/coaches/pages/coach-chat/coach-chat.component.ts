import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

@Component({
  selector: 'app-coach-chat',
  templateUrl: './coach-chat.component.html',
  styleUrls: ['./coach-chat.component.scss']
})
export class CoachChatComponent {
  averageRating:number=0;
  starRating = 0;
  public routes = routes;
  userRated: boolean = false;
  userRating: number = 0;
  userComment: string = '';
  newRating: number = 0;
  newComment: string = '';
  currentRate:number=0

  eventReview:any =[{review: false},{review: false},{review: false},{review: false},{review: false}];
  userReview:any =[{review: false},{review: false},{review: false},{review: false},{review: false}];


  submitRating() {
    // Here you would typically submit the rating and comment to a service or API
    // For the sake of simplicity, we'll just set the userRating, userComment, and userRated flag
    this.userRating = this.newRating;
    this.userComment = this.newComment;
    this.userRated = true;
  }

  onRateChange(data:any){

  }
  submitEventReview(i:number){
    for(var index=0;index<=i;index++){
      this.eventReview[index].review = true;
    }
    if(i<=this.eventReview.length){
      for(var index=i+1;index<5;index++){
        this.eventReview[index].review = false;
      }
    }
  }

  submitUserReview(i:number){
    for(var index=0;index<=i;index++){
      this.userReview[index].review = true;
    }
    if(i<=this.userReview.length){
      for(var index=i+1;index<5;index++){
        this.userReview[index].review = false;
      }
    }
  }
}