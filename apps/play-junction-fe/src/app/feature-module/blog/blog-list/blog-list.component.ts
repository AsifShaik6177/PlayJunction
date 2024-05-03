import { Component } from '@angular/core';
import { routes } from '../../../core/helpers/routes';
import { bloglist } from '../../../core/models/models';
import { DataService } from '../../../core/service/data/data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  public routes = routes;
  public bloglist: bloglist[] = [];
  constructor(private dataservice: DataService) {
    this.bloglist = this.dataservice.bloglist;
  }
  fav(data: bloglist) {
    data.favourite = !data.favourite;
  }
}
