import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SportEvent, routes } from '../../../../core/core.index';
import { EventService } from '../../../../../services/event.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventRatingService } from '../../../../../services/event-rating.service';

interface data {
  value: string;
}
@Component({
  selector: 'app-book-court',
  templateUrl: './book-court.component.html',
  styleUrls: ['./book-court.component.scss']
})
export class BookCourtComponent {
  public routes = routes;
  public selectedValue1 = '';
  showTimePicker: Array<string> = []
  date = new Date();
  zones:  Date= new Date();
  mytime: Date = new Date();
  myTime: Date = new Date();
  selectedList1: data[] = [
    {value: 'Select City'},
    {value: 'Toronto'},
    {value: 'Texas'},
  ];
  adult = 1;
  children = 1;
  young_children = 1;
  bookingDate:Date = new Date();
  eventId: string='';
  eventDetails: SportEvent = new SportEvent();
  constructor( private datePipe: DatePipe,
    private eventService: EventService,
    private eventRatingService: EventRatingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    var dateWithZeroMinsAndSecs = new Date();
    dateWithZeroMinsAndSecs.setMinutes(0,0,0);
    this.zones = dateWithZeroMinsAndSecs;
    this.route.params.subscribe((params: Params) => {
      this.eventId = params['eventId'];
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

  increment(res:number) {    
    if(res === 1) {
      this.adult++;
    }
    if(res === 2) {
      this.children++;
    }
    if(res === 3) {
      this.young_children++;
    }
  }
  decrement(res:number) {
    if(res === 1) {
      if (this.adult > 0) {
        this.adult--;
      }
    }
    if(res === 2) {
      if (this.children > 0) {
        this.children--;
      }
    }
    if(res === 3) {
      if (this.young_children > 0) {
        this.young_children--;
      }
    }
  }
  toggleTimePcker(value: string): void {

    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value
    } else {
      this.showTimePicker = []
    }
  }
  formatTime(date: Date) {
    var selectedDate: Date = new Date(date)
    selectedDate.setMinutes(0,0,0);
    return this.datePipe.transform(selectedDate, 'h:mm a')
  }

  clickSubmit(){
    console.log(this.bookingDate);
  }

  getTotalBill(){
    var hours = this.zones.getHours()-this.myTime.getHours();
    return hours * Number(this.eventDetails.venuePrice);
  }

  navigateToNext(){
    this.router.navigate([routes.bookCourtConfirm, {eventId: this.eventId,date:this.bookingDate.toDateString(), start: this.myTime.getHours(), end: this.zones.getHours()}])
  }
}
