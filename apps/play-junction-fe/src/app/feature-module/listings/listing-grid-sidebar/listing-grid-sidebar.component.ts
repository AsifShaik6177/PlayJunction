import { Component } from '@angular/core';
import { routes } from '../../../core/helpers/routes';
import { DataService, listinggridsidebar } from '../../../core/core.index';

interface data {
  value: string;
}

@Component({
  selector: 'app-listing-grid-sidebar',
  templateUrl: './listing-grid-sidebar.component.html',
  styleUrls: ['./listing-grid-sidebar.component.scss']
})
export class ListingGridSidebarComponent {
  isClassAdded: boolean[] = [false, false, false];
  public routes = routes
  public listinggridsidebar: listinggridsidebar[] = [];
  constructor (private dataservice:DataService){
    (this.listinggridsidebar = this.dataservice.listinggridsidebar)
  }
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  fav(slide:listinggridsidebar){
    slide.favourite = !slide.favourite
  }
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  selectedList1: data[] = [
    {value: 'Relevance'},
    {value: 'Price'}
  ];
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
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }
}
