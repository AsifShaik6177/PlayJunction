import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';
import { EventRating, SportEvent, routes } from '../../../core/core.index';
import { EventService } from '../../../../services/event.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventRatingService } from 'apps/play-junction-fe/src/services/event-rating.service';

@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.component.html',
  styleUrls: ['./venue-details.component.scss'],
})
export class VenueDetailsComponent implements OnInit {
  public routes = routes;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  date = new Date();
  public albumsOne: any = [];
  public albumsTwo: any = [];
  public albumsThree: any = [];
  event: any;
  eventDetails: SportEvent = new SportEvent();
  includes: string[] = [];
  venueRules: string[] = [];
  amneties: string[]=[];
  ratingArray: string[]=[];
  reviewList: EventRating[] = [];

  constructor(
    private router: Router,
    private _lightbox: Lightbox,
    private eventService: EventService,
    private eventRatingService: EventRatingService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: Params) => {
      this.event = params['eventId'];
      this.eventService
        .getEventById(this.event)
        .subscribe((eventDetails: SportEvent) => {
          console.log(eventDetails);
          this.eventRatingService.getAllEventReviews().subscribe((reviews) => {
            this.reviewList = reviews.filter(
              (review) => eventDetails.eventId == review.eventId
            );
            var review = 0;
            this.reviewList?.forEach((item) => {
              review += Number(item.review);
            });
            review = review / ((this.reviewList.length>0) ? this.reviewList.length : 1);
            eventDetails.points = String(review);
            eventDetails.reviews = this.reviewList.length;
            this.includes = eventDetails.includes.split(";");
            this.includes = this.includes.filter(x=>x!=="");
            this.venueRules = eventDetails.includes.split(";");
            this.venueRules = this.venueRules.filter(x=>x!=="");
            this.amneties = eventDetails.amneties.split(";");
            this.amneties = this.amneties.filter(x=>x!=="");
            this.ratingArray = Array(Math.floor(review)).fill('');
            this.eventDetails = eventDetails;
            eventDetails.gallery.forEach((x) => {
              this.albumsOne.push({ src: x });
            });
            this.event = JSON.parse(localStorage.getItem('event') ?? '{}');
            for (let i = 1; i <= 5; i++) {
              const src = 'assets/img/gallery/gallery1/gallery-0' + i + '.png';
              this.albumsOne.push({ src: src });
            }
            for (let i = 1; i <= 3; i++) {
              const src = 'assets/img/gallery/gallery2/gallery-0' + i + '.jpg';
              this.albumsTwo.push({ src: src });
            }
            for (let i = 1; i <= 5; i++) {
              const src = 'assets/img/gallery/gallery-0' + i + '.jpg';
              this.albumsThree.push({ src: src });
            }
          });
        });
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.event = params['eventId'];
    });
  }
  open1(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }
  open2(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }
  open3(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }
  public venuedetailsoneOwlOptions: OwlOptions = {
    margin: 2,
    nav: true,
    loop: true,
    dots: false,
    smartSpeed: 2000,
    navText: [
      "<i class='feather icon-chevron-left'></i>",
      "<i class='feather icon-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      768: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  };

  public venuedetailstwoOwlOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 2000,
    navText: [
      "<i class='feather icon-chevron-left'></i>",
      "<i class='feather icon-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  public venuedetailsthreeOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    dots: false,
    smartSpeed: 2000,
    navText: [
      "<i class='feather icon-chevron-left'></i>",
      "<i class='feather icon-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  pages = [
    {
      id: 1,
      image: 'assets/img/gallery/gallery1/gallery-02.png',
    },
    {
      id: 2,
      image: 'assets/img/gallery/gallery1/gallery-03.png',
    },
    {
      id: 3,
      image: 'assets/img/gallery/gallery1/gallery-04.png',
    },
    {
      id: 4,
      image: 'assets/img/gallery/gallery1/gallery-05.png',
    },
    {
      id: 5,
      image: 'assets/img/gallery/gallery1/gallery-01.png',
    },
    {
      id: 6,
      image: 'assets/img/gallery/gallery1/gallery-02.png',
    },
    {
      id: 7,
      image: 'assets/img/gallery/gallery1/gallery-03.png',
    },
  ];
  gallery = [
    {
      id: 1,
      image: 'assets/img/gallery/gallery2/gallery-01.jpg',
    },
    {
      id: 2,
      image: 'assets/img/gallery/gallery2/gallery-02.jpg',
    },
    {
      id: 3,
      image: 'assets/img/gallery/gallery2/gallery-03.jpg',
    },
    {
      id: 4,
      image: 'assets/img/gallery/gallery2/gallery-01.jpg',
    },
    {
      id: 5,
      image: 'assets/img/gallery/gallery2/gallery-02.jpg',
    },
    {
      id: 6,
      image: 'assets/img/gallery/gallery2/gallery-01.jpg',
    },
  ];
  similarVenues = [
    {
      image: 'assets/img/venues/venues-02.jpg',
      tags: 'Top Rated',
      hours: '200',
      rating: '4.2',
      reviews: '500 Reviews',
      title: 'Manchester Academy',
      content:
        'Manchester Academy: Where dreams meet excellence in sports education and training game.',
      country: 'Guysville, OH',
      date: '16 May 2023',
      image2: 'assets/img/profiles/avatar-03.jpg',
      name: 'Andrew',
      status: 'active',
      favourite: false,
    },

    {
      image: 'assets/img/venues/venues-04.jpg',
      tags: '',
      hours: '500',
      rating: '4.8',
      reviews: '200 Reviews',
      title: 'Badminton Academy',
      content:
        'Unleash your badminton potential at our premier Badminton Academy, where champions are made',
      country: 'Sacramento, CA',
      date: '17 May 2023',
      image2: 'assets/img/profiles/avatar-04.jpg',
      name: 'Rebecca',
      status: 'active',
      favourite: false,
    },
    {
      image: 'assets/img/venues/venues-05.jpg',
      tags: '',
      hours: '300',
      rating: '4.8',
      reviews: '200 Reviews',
      title: 'Sarah Sports Academy',
      content:
        'Elevate your athletic journey at Sarah Sports Academy, where excellence meets opportunity.',
      country: 'Sacramento, CA',
      date: '17 May 2023',
      image2: 'assets/img/profiles/avatar-05.jpg',
      name: 'Rebecca',
      status: 'active',
      favourite: false,
    },
    {
      image: 'assets/img/venues/venues-03.jpg',
      tags: 'Featured',
      hours: '450',
      rating: '4.6',
      reviews: '100 Reviews',
      title: 'ABC Sports Academy',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.industry's standard",
      country: 'Little Rock,AR',
      date: '17 May 2023',
      image2: 'assets/img/profiles/avatar-04.jpg',
      name: 'Mart Sublin',
      status: 'active',
      favourite: false,
    },
  ];
  gallerys = [
    {
      id: 1,
      image: 'assets/img/gallery/gallery-01.jpg',
    },
    {
      id: 2,
      image: 'assets/img/gallery/gallery-02.jpg',
    },
    {
      id: 3,
      image: 'assets/img/gallery/gallery-03.jpg',
    },
    {
      id: 4,
      image: 'assets/img/gallery/gallery-04.jpg',
    },
    {
      id: 5,
      image: 'assets/img/gallery/gallery-05.jpg',
    },
  ];
  fav(slide: { favourite: boolean }) {
    slide.favourite = !slide.favourite;
  }
  public scrollContent(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      block: 'start',
      inline: 'nearest',
    });
  }
  isShowMore: boolean = true;

  toggleShowMore(): void {
    this.isShowMore = !this.isShowMore;
  }

  getReviewArray(count:String){
    return Array(Math.floor(Number(count))).fill('');
  }

  bookeEvent(){
    this.router.navigate([routes.bookCourt, this.eventDetails.eventId]);
  }
}
