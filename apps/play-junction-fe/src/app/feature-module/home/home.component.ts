import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from '../../core/helpers/routes';
import { venueCarousel } from '../../shared/model/page.model';
import { EventService } from '../../../../src/services/event.service';
import { HomeEventsCardModel, SportEvent } from '../../core/models/models';

interface data {
  value: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public selectedValue1 = '';
  public selectedValue2 = '';
  public routes = routes;
  category = 'Courts';
  selected = false;
  selectedList1: data[] = [
    { value: 'Badminton' },
    { value: 'Basketball' },
    { value: 'Cricket' },
    { value: 'Volleyball' },
  ];

  selectedList2: data[] = [
    { value: 'Alabama' },
    { value: 'Alaska' },
    { value: 'Arizona' },
    { value: 'Arkansas' },
    { value: 'California' },
    { value: 'Colorado' },
    { value: 'Connecticut' },
  ];

  courts :HomeEventsCardModel[] = [
    {
      id: 1,
      title: 'Smart Shuttlers',
      img: 'assets/img/venues/venues-04.jpg',
      address: '1 Crowthorne Road, 4th Street, NY',
      rating: '4.2',
      review: '300',
      distance: '2.1',
      favourite: false,
    }
  ];
  eventDataList: SportEvent[]=[];

  constructor(private eventService:EventService){
    this.eventService.getAllEvents().subscribe((x:SportEvent[])=>{
      this.eventDataList = x;
      var index =1;
      this.eventDataList.forEach((x:SportEvent)=>{
        var event: HomeEventsCardModel = {id: index, title: x.eventName, img: x.gallery[0],rating:'0.0',distance:'', favourite: false, address:x.address,review: ''};
        this.courts.push(event)
      });
    })
  }
  ngOnInit() {
    AOS.init({ duration: 1200, once: true });
  }
  fav(slide: venueCarousel) {
    slide.favourite = !slide.favourite;
  }
  public topVenueOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    dots: false,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };
  public coachOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    dots: false,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 4,
      },
    },
  };
  public universitiesCompaniesOwlOptions: OwlOptions = {
    loop: true,
    margin: 60,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='feather-chevron-left'></i>",
      "<i class='feather-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };


}
