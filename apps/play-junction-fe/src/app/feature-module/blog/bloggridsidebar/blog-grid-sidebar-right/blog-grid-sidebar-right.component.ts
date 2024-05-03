import { Component } from '@angular/core';
import { routes } from '../../../../core/helpers/routes';
import { bloggrid, latestpost } from '../../../../core/models/models';
import { DataService } from '../../../../core/service/data/data.service';


@Component({
  selector: 'app-blog-grid-sidebar-right',
  templateUrl: './blog-grid-sidebar-right.component.html',
  styleUrls: ['./blog-grid-sidebar-right.component.scss']
})
export class BlogGridSidebarRightComponent {
  public routes = routes
  public latestpost: latestpost[] =[];
  public bloggrid: bloggrid[]=[];
  constructor (private dataservice:DataService){
    (this.latestpost = this.dataservice.latestpost),
    (this.bloggrid = this.dataservice.bloggrid)

  }
  fav(slide: bloggrid){
    slide.favourite = !slide.favourite
  }

}
