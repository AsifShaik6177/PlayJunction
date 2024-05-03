import {
  Component,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DataService, routes } from '../../../core/core.index';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';
import { DOCUMENT } from '@angular/common';
import { featuredVenuesSlider } from '../../../shared/model/page.model';

interface data {
  value: string;
}
@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.scss'],
})
export class CoachDetailComponent implements OnInit {
  isShowMore: boolean = true;

  toggleShowMore(): void {
    this.isShowMore = !this.isShowMore;
  }
  public featuredVenuesSlider: featuredVenuesSlider[] = [];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  public albumsOne: any = [];
  public albumsTwo: any = [];
  public scroll: any;
  public sections = 9;
  public routes = routes;
  public selectedValue1 = '';
  public coachDetail1: any = [];
  public coachDetail2: any = [];

  public coachDetailOptions: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };
  public featuredVenuesSliderOptions: OwlOptions = {
    loop: true,
    margin: 24,
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
        items: 3,
      },
      500: {
        items: 3,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  selectedList1: data[] = [
    { value: 'Select City' },
    { value: 'Tornoto' },
    { value: 'Texas' },
  ];

  constructor(
    private data: DataService,
    private _lightbox: Lightbox,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.coachDetail1 = this.data.coachDetail1;
    this.coachDetail2 = this.data.coachDetail2;
    this.featuredVenuesSlider = this.data.featuredVenuesSlider;
    for (let i = 1; i <= 6; i++) {
      const src = 'assets/img/custom/gallery-0' + i + '.jpg';
      this.albumsOne.push({ src: src });
    }
    for (let i = 1; i <= 5; i++) {
      const src = 'assets/img/gallery/gallery-0' + i + '.jpg';
      this.albumsTwo.push({ src: src });
    }
  }
  open1(index: number, albumArray: Array<never>): void {
    this._lightbox.open(albumArray, index);
  }
  open2(index: number, albumArray: Array<never>): void {
    this._lightbox.open(albumArray, index);
  }
  @HostListener('window:scroll', [])
  ngOnInit() {
    this.renderer.listen(window, 'scroll', () => {
      this.scroll = window.scrollY / this.sections;
    });
  }
  inView(ele: HTMLElement) {
    ele.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
  activeTab = 'tab1';
}
