import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService, badmintonList, routes } from '../../../core/core.index';

@Component({
  selector: 'app-blog-carousel',
  templateUrl: './blog-carousel.component.html',
  styleUrls: ['./blog-carousel.component.scss']
})
export class BlogCarouselComponent {
  public routes = routes
  public badmintonList: badmintonList[] = [];

  constructor (private dataservice:DataService){
    (this.badmintonList = this.dataservice.badmintonList)
  }
  fav(slide:badmintonList){
    slide.favourite = !slide.favourite
  }
 
  public badmintonOwlOptions: OwlOptions = {
    items: 3,
    loop:true,
    margin:24,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      500:{
        items:1
      },
      768:{
        items:2
      },
      991:{
        items:2
      },
      1000:{
        items:3
      }
    },
    
  };

}
