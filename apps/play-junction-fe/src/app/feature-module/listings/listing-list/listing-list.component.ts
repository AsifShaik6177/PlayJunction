import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../core/helpers/routes';
import { SportEvent, sports } from '../../../core/models/models';
import { DataService } from '../../../core/service/data/data.service';
import { EventService } from '../../../../services/event.service';
import { EventRatingService } from '../../../../services/event-rating.service';
interface data {
  value: string;
}

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.scss'],
})
export class ListingListComponent {
  isClassAdded: boolean[] = [false, false, false];
  events: SportEvent[]=[];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  fav(slide: sports) {
    slide.favourite = !slide.favourite;
  }
  public routes = routes;
  public sports: sports[] = [];
  // constructor (private dataservice:DataService){
  //   (this.sports = this.dataservice.sports)
  // }

  constructor(
    private router: Router,
    private dataservice: DataService,
    private eventService: EventService,
    private eventRatingService: EventRatingService
  ) {
    var user = JSON.parse(localStorage.getItem('userData') ?? '{}');
    // this.sports = this.dataservice.listinggrid;
    this.eventService.getAllEvents().subscribe((x) => {
      this.events = x
      this.eventRatingService.getAllEventReviews().subscribe((reviews) => {
        x.forEach((event) => {
          var reviewList = reviews.filter(
            (review) => event.eventId == review.eventId
          );
          var review = 0;
          reviewList?.forEach((item) => {
            review += Number(item.review);
          });
          review = review / (reviewList.length ?? 1);
          var points = String(review);
          this.sports.push({
            id:event.eventId,
            fees: event.venuePrice,
            img1: event.gallery[0],
            time: '/hr',
            points: points,
            reviews: `${reviewList.length ?? 0} Reviews`,
            title: event.eventName,
            para: event.overview,
            open: 'Next availability',
            address: event.address,
            date: event.availability[0],
            img2: user.profilePhoto ?? '',
            name: user.name ?? '',
            select: 'Book Now',
          });
        });
        // this.listinggrid.push
        // this.listinggrid = x;
      });
    });
  }
  public selectedValue1 = '';

  selectedList1: data[] = [{ value: 'Relevance' }, { value: 'Price' }];

  bookEvent(data:any){
    var event = this.events.find(x=>x.eventId ===data)?.eventId;
    localStorage.setItem('event',JSON.stringify(event)??'{}');
    this.router.navigate([routes.venueDetails,event]);
  }
}
