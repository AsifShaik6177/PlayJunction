import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { commandList, latestpost, routes, venuesList } from '../../../../core/core.index';
import { DataService } from '../../../../core/service/data/data.service';

@Component({
  selector: 'app-blog-details-sidebar-left',
  templateUrl: './blog-details-sidebar-left.component.html',
  styleUrls: ['./blog-details-sidebar-left.component.scss']
})
export class BlogDetailsSidebarLeftComponent {

  public routes = routes
  public venuesList: venuesList[] = [];
  public commandList: commandList[] =[];
  public latestpost: latestpost[] =[];
  fav(slide: venuesList){
    slide.favourite = !slide.favourite
  }

  constructor (private dataservice:DataService){
    (this.venuesList = this.dataservice.venuesList),
    (this.commandList = this.dataservice.commandList),
    (this.latestpost = this.dataservice.latestpost)

  }
 
  public venuesonOwlOptions: OwlOptions = {
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
