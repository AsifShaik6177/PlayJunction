
import { Component, OnInit } from '@angular/core';
import { sports } from '../../../core/models/models';
import { routes } from '../../../core/helpers/routes';
import { DataService } from '../../../core/service/data/data.service';

interface data {
  value: string;
}

@Component({
  selector: 'app-listing-map-sidebar',
  templateUrl: './listing-map-sidebar.component.html',
  styleUrls: ['./listing-map-sidebar.component.scss']
})
export class ListingMapSidebarComponent implements OnInit {
  public routes = routes
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  selected!: Date | null;
  public isClass = false;
  fav(slide: sports) {
    slide.favourite = !slide.favourite;
  }
  isClassAdded: boolean[] = [false, false, false];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
/* eslint-disable @typescript-eslint/no-explicit-any */
  selectedList1: data[] = [
    {value: 'Relevance'},
    {value: 'Price'}
  ];
  slider: any;
  infowindow: any = null;
  doc_name: any;
  bounds = new google.maps.LatLngBounds();
  map: any;
  current = 0;
  content: any;
  locations = [
    {
      id: 1,
      doc_name: 'Ruby Perrin',
      speciality: 'Personal blog',
      address: 'Florida, USA',
      lat: 53.470692,
      lng: -2.220328,
      icons: 'default',
      profile_link: 'coach-detail.html',
      total_review: '17',
      image: 'assets/img/profiles/avatar-01.jpg',
    },
    {
      id: 2,
      doc_name: 'Fred Ortego',
      speciality: 'Personal blog',
      address: 'Newyork, USA',
      lat: 53.469189,
      lng: -2.199262,
      icons: 'default',
      profile_link: 'coach-detail.html',
      total_review: '35',
      image: 'assets/img/profiles/avatar-02.jpg',
    },
    {
      id: 3,
      doc_name: 'Deborah Angel',
      speciality: 'Personal blog',
      address: 'Georgia, USA',
      lat: 53.468665,
      lng: -2.189269,
      icons: 'default',
      profile_link: 'coach-detail.html',
      total_review: '27',
      image: 'assets/img/profiles/avatar-03.jpg',
    },
    {
      id: 4,
      doc_name: 'Sofia Brient',
      speciality: 'Personal blog',
      address: 'Louisiana, USA',
      lat: 53.463894,
      lng: -2.17788,
      icons: 'default',
      profile_link: 'coach-detail.html',
      total_review: '4',
      image: 'assets/img/profiles/avatar-04.jpg',
    },
    {
      id: 5,
      doc_name: 'Marvin Campbell',
      speciality: 'Personal blog',
      address: 'Michigan, USA',
      lat: 53.466359,
      lng: -2.213314,
      icons: 'default',
      profile_link: 'coach-detail.html',
      total_review: '66',
      image: 'assets/img/profiles/avatar-05.jpg',
    },
    {
      id: 6,
      doc_name: ' Katharine',
      speciality: 'Personal blog',
      address: 'Texas, USA',
      lat: 53.463906,
      lng: -2.213271,
      icons: 'default',
      profile_link: 'coach-detail.html',
      total_review: '52',
      image: 'assets/img/profiles/avatar-06.jpg',
    },
    {
      id: 7,
      doc_name: ' Linda Tobin',
      speciality: 'Personal blog',
      address: 'Kansas, USA',
      lat: 53.461974,
      lng: -2.210661,
      icons: 'default',
      profile_link: 'coach-detail.html',
      total_review: '43',
      image: 'assets/img/profiles/avatar-07.jpg',
    },
    {
      id: 8,
      doc_name: ' Paul Richard',
      speciality: 'Personal blog',
      address: 'California, USA',
      lat: 53.458785,
      lng: -2.188532,
      icons: 'default',
      profile_link: 'coach-detail.html',
      total_review: '49',
      image: 'assets/img/profiles/avatar-08.jpg',
    },
    {
      id: 9,
      doc_name: ' John Gibbs',
      speciality: 'Personal blog',
      address: 'Oklahoma, USA',
      lat: 53.4558571,
      lng: -2.1950372,
      icons: 'default',
      profile_link: 'coach-detail.html',
      total_review: '112',
      image: 'assets/img/profiles/avatar-09.jpg',
    },
    {
      id: 10,
      doc_name: ' Olga Barlow',
      speciality: 'Personal blog',
      address: 'Montana, USA',
      lat: 53.45885,
      lng: -2.194549,
      icons: 'default',
      profile_link: 'coach-detail.html',
      total_review: '65',
      image: 'assets/img/profiles/avatar-04.jpg',
    },
    {
      id: 11,
      doc_name: ' Julia Washington',
      speciality: 'Personal blog',
      address: 'Oklahoma, USA',
      lat: 53.461733,
      lng: -2.194502,
      icons: 'default',
      profile_link: 'coach-detail.html',
      total_review: '5',
      image: 'assets/img/profiles/avatar-05.jpg',
    },
    {
      id: 12,
      doc_name: ' Shaun Aponte',
      speciality: 'Personal blog',
      address: 'Indiana, USA',
      lat: 53.460548,
      lng: -2.190956,
      icons: 'default',
      profile_link: 'coach-detail.html',
      total_review: '5',
      image: 'assets/img/profiles/avatar-06.jpg',
    },
  ];
  images = [
    {
      path: 'assets/img/features/feature-01.jpg',
    },
    {
      path: 'assets/img/features/feature-02.jpg',
    },
    {
      path: 'assets/img/features/feature-03.jpg',
    },
    {
      path: 'assets/img/features/feature-04.jpg',
    },
  ];
  ngOnInit(): void {
    this.initilize();
  }
  initilize() {
    window.location.reload();
    window.stop();
    this.bounds = new google.maps.LatLngBounds();
    const mapOptions = {
      zoom: 14,
      center: { lat: 53.470692, lng: -2.220328 },
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );
    this.map.slide = true;

    this.setMarkers(this.map, this.locations);
    this.infowindow = new google.maps.InfoWindow({
      content: 'loading...',
    });
    // google.maps.event.addListener(this.infowindow, 'closeclick', function () {
    //   this.infowindow.close();
    // });
    // this.slider = window.setTimeout(this.show, 3000);
  }
  setInfo(marker: any) {
    // eslint-disable-next-line no-var
    var content =
      '<div class="profile-widget" style="width: 100%; display: inline-block;">' +
      '<div class="list-map-img">' +
      '<a href="' +
      marker.profile_link +
      '" tabindex="0" target="_blank">' +
      '<img class="img-fluid" alt="' +
      marker.doc_name +
      '" src="' +
      marker.image +
      '">' +
      '</a>' +
      '</div>' +
      '<div class="pro-content">' +
      '<h3 class="title">' +
      '<a href="' +
      marker.profile_link +
      '" tabindex="0">' +
      marker.doc_name +
      '</a>' +
      '<i class="fas fa-check-circle verified"></i>' +
      '</h3>' +
      '<ul class="available-info">' +
      '<li><i class="feather-map-pin"></i> ' +
      marker.address +
      ' </li>' +
      '</ul>' +
      '<div class="avalbity-review avalbity-review-list">' +
      '<ul>' +
      '<li>' +
      '<div class="avalibity-date">' +
      '<span><i class="feather icon-calendar"></i></span>' +
      '<div class="avalibity-datecontent">' +
      '<h6>Next Availabilty</h6>' +
      '<h5>24 May 2023</h5>' +
      '</div>' +
      '</div>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>';
    this.infowindow.setContent(content);
  }
  /* eslint-disable no-var */
  setMarkers(map: any, locations: any) {
    for (var i = 0; i < locations.length; i++) {
      var item = locations[i];
      var latlng = new google.maps.LatLng(item.lat, item.lng);
      var marker = new google.maps.Marker({
        position: latlng,
        map: map,

        icon: 'assets/img/marker.png',
      });
      this.bounds.extend(latlng);

      google.maps.event.addListener(marker, 'click', () => {
        this.setInfo(item);
        this.infowindow.open(map, marker);
      });
    }
    map.fitBounds(this.bounds);
    google.maps.event.addListener(map, 'zoom_changed', function () {
      if (map.zoom > 16) map.slide = false;
    });
  }

  selectedList2: data[] = [
    {value: 'Lesson 1'},
    {value: 'Lesson 2'},
    {value: 'Lesson 3'}
  ];
  selectedList3: data[] = [
    {value: 'Select Location'},
    {value: 'Location 1'},
    {value: 'Location 2'}
  ];
  openSidebar(){
    this.isClass = !this.isClass
  }
  hideSidebar() {
    this.isClass = !this.isClass
  }
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }
  public sports: sports[] = [];
  constructor(private dataservice: DataService) {
    this.sports = this.dataservice.sports;
  }
}
