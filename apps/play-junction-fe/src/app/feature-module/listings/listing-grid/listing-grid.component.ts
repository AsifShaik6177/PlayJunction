import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, SportEvent, listinggrid, routes } from '../../../core/core.index';
import { EventService } from '../../../../services/event.service';
import { EventRatingService } from '../../../../services/event-rating.service';
interface data {
  value: string;
}

@Component({
  selector: 'app-listing-grid',
  templateUrl: './listing-grid.component.html',
  styleUrls: ['./listing-grid.component.scss']
})
export class ListingGridComponent {
  isClassAdded: boolean[] = [false, false, false];
  public listinggrid: listinggrid[] = [];
  events: SportEvent[] = [];
  constructor (
    private router: Router,
    private dataservice:DataService,private eventService:EventService,
    private eventRatingService: EventRatingService){
      var user = JSON.parse(localStorage.getItem('userData')??'{}');
    (this.listinggrid = this.dataservice.listinggrid);
    this.eventService.getAllEvents().subscribe(x=>{
      this.events = x;
      this.eventRatingService.getAllEventReviews().subscribe(reviews=>{
        x.forEach((event)=>{
          var reviewList = reviews.filter((review)=>event.eventId==review.eventId)
          var review = 0;
          reviewList?.forEach((item)=>{review+=Number(item.review)});
          review = (review)/((reviewList?.length>0)?reviewList.length:1);
          var points = String(review)
          this.listinggrid.push({id:event.eventId, fees: event.venuePrice,img1:event.gallery[0], time:'/hr', points: points, reviews: `${reviewList.length??0} Reviews`, title:event.eventName, para: event.overview, open: 'Next availability',  address:event.address, date:event.availability[0],img2:user.profilePhoto??'', name: user.name??'', select: 'Book Now'})
        })
        // this.listinggrid.push
        // this.listinggrid = x;
      })

    })
  }
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  fav(slide:listinggrid){
    slide.favourite = !slide.favourite
  }
  public routes = routes;
  public selectedValue1 = '';
  selectedList1: data[] = [
    {value: 'Relevance'},
    {value: 'Price'}
  ];

  bookEvent(data:any){
    var eventId = this.events.find(x=>x.eventId ===data)?.eventId;
    this.router.navigate([routes.venueDetails,eventId]);
  }
}
