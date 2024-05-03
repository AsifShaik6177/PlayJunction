import { Component } from '@angular/core';
import { routes } from '../../../core/helpers/routes';
import { badmintonList } from '../../../core/models/models';

import { DataService } from '../../../core/service/data/data.service';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})
export class BlogGridComponent {
  public routes = routes
  public badmintonList: badmintonList[] = [];
  constructor (private dataservice:DataService){
    (this.badmintonList = this.dataservice.badmintonList)
  }
  fav(slide: badmintonList){
    slide.favourite = !slide.favourite
  }

}
