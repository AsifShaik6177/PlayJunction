import { Component } from '@angular/core';
import { SportEvent, UserProfile, routes } from '../../../../core/core.index';
import { EventService } from '../../../../../services/event.service';
import { EventRatingService } from '../../../../../services/event-rating.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-book-confirm',
  templateUrl: './book-confirm.component.html',
  styleUrls: ['./book-confirm.component.scss']
})
export class BookConfirmComponent {
  public routes = routes;
  eventId: string='';
  eventDetails: SportEvent = new SportEvent();
  userData: UserProfile;
  bookingDate: Date = new Date;
  startHours: number = 0;
  endHours: number = 0;
  bookingHours: number=0;
  totalCost: number=0;
  constructor(
    private eventService: EventService,
    private eventRatingService: EventRatingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    var user = JSON.parse(localStorage.getItem('userData')??'{}');
    this.userData = new UserProfile(user);
    var dateWithZeroMinsAndSecs = new Date();
    dateWithZeroMinsAndSecs.setMinutes(0,0,0);
    this.route.params.subscribe((params: Params) => {
      this.eventId = params['eventId'];
      var bookingDate = params['date'];
      this.startHours = Number(params['start'])??0;
      this.endHours = Number(params['end'])??0;
      this.bookingHours = this.endHours - this.startHours;
      this.bookingDate = new Date(bookingDate)
      this.eventService
        .getEventById(this.eventId)
        .subscribe((eventDetails: SportEvent) => {
          console.log(eventDetails);
          this.eventRatingService.getAllEventReviews().subscribe((reviews) => {
            var reviewList = reviews.filter(
              (review) => eventDetails.eventId == review.eventId
            );
            var review = 0;
            reviewList?.forEach((item) => {
              review += Number(item.review);
            });
            review = review / ((reviewList.length>0) ? reviewList.length : 1);
            eventDetails.points = String(review);
            eventDetails.reviews = reviewList.length;
            // this.includes = eventDetails.includes.split(";");
            // this.includes = this.includes.filter(x=>x!=="");
            // this.venueRules = eventDetails.includes.split(";");
            // this.venueRules = this.venueRules.filter(x=>x!=="");
            // this.amneties = eventDetails.amneties.split(";");
            // this.amneties = this.amneties.filter(x=>x!=="");
            // this.ratingArray = Array(Math.floor(review)).fill('');
            this.eventDetails = eventDetails;
            this.totalCost = Number(this.eventDetails.venuePrice) * this.bookingHours;
            // eventDetails.gallery.forEach((x) => {
            //   this.albumsOne.push({ src: x });
            // });
            // this.event = JSON.parse(localStorage.getItem('event') ?? '{}');
            // for (let i = 1; i <= 5; i++) {
            //   const src = 'assets/img/gallery/gallery1/gallery-0' + i + '.png';
            //   this.albumsOne.push({ src: src });
            // }
            // for (let i = 1; i <= 3; i++) {
            //   const src = 'assets/img/gallery/gallery2/gallery-0' + i + '.jpg';
            //   this.albumsTwo.push({ src: src });
            // }
            // for (let i = 1; i <= 5; i++) {
            //   const src = 'assets/img/gallery/gallery-0' + i + '.jpg';
            //   this.albumsThree.push({ src: src });
            // }
          });
        });
    });
  }

  

  nextConfirmation(){
    // this.book
    this.router.navigate([routes.bookCourtCheckout]);
    // [routerLink]="routes.bookCourtPersonalInfo"
  }
}
