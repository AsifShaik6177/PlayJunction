import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from '../../../../core/helpers/routes';
import { commandList, latestpost, venuesList } from '../../../../core/models/models';
import { DataService } from '../../../../core/service/data/data.service';

@Component({
  selector: 'app-blog-details-sidebar-right',
  templateUrl: './blog-details-sidebar-right.component.html',
  styleUrls: ['./blog-details-sidebar-right.component.scss']
})
export class BlogDetailsSidebarRightComponent {
  public routes = routes
  public venuesList: venuesList[] = [];
  public commandList: commandList[] =[];
  public latestpost: latestpost[] =[];

  constructor (private dataservice:DataService){
    (this.venuesList = this.dataservice.venuesList),
    (this.commandList = this.dataservice.commandList),
    (this.latestpost = this.dataservice.latestpost)

  }
  fav(slide: venuesList){
    slide.favourite = !slide.favourite
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
