import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  CommonService,
  DataService,
  routes,
  url,
  usermenu,
} from '../../core/core.index';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public routes = routes;
  breadcrum = true;
  base = '';
  page = '';
  last = '';
  currentUrl = '';

  courtBg = true;
  userMenus: Array<usermenu> = [];
  url: string;

  setactive = false;
  constructor(
    private Router: Router,
    location: Location,
    private dataservice: DataService,
    private common: CommonService
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res?.split('-').join(' ');
    });
    this.common.page.subscribe((res: string) => {
      this.page = res?.split('-').join(' ');
    });
    this.common.last.subscribe((res: string) => {
      this.last = res?.split('-').join(' ');
    });

    this.dataservice.getuserMenus.subscribe((res: Array<usermenu>) => {
      this.userMenus = res;
    });
    Router.events.subscribe((event: object) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.Router);
    this.url = location.path();
  }
  getRoutes(event: url) {
    const splitVal = event.url.split('/');
    this.currentUrl = event.url;
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);

    if (this.page === 'dashboard') {
      this.courtBg = false;
    }
    if (this.currentUrl == routes.userCoaches) {
      this.page = 'invoice';
    }
    if (this.currentUrl == routes.userOthersettings) {
      this.page = 'user profile';
    }
  }
  setActive(menu: string) {
    sessionStorage.setItem('title', menu);
    this.userMenus.map((title) => {
      const active = sessionStorage.getItem('title');
      if (active == title.page) {
        this.setactive = true;
      } else {
        this.setactive = false;
      }
    });
  }
  public venuedetailstwoOwlOptions: OwlOptions = {
    margin: 10,
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
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
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
}
