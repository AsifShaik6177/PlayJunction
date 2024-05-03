import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { blogleft, latestpost } from '../../../../core/models/models';
import { DataService } from '../../../../core/service/data/data.service';

@Component({
  selector: 'app-blog-list-sidebar-left',
  templateUrl: './blog-list-sidebar-left.component.html',
  styleUrls: ['./blog-list-sidebar-left.component.scss']
})
export class BlogListSidebarLeftComponent {
  public routes = routes
  public blogleft: blogleft[] = [];
 
  public latestpost: latestpost[] =[];
  constructor (private dataservice:DataService){
    (this.latestpost = this.dataservice.latestpost),
    (this.blogleft = this.dataservice.blogleft)
  }
  fav(slide: blogleft){
    slide.favourite = !slide.favourite
  }

}
