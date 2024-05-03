import { Component } from '@angular/core';
import { routes } from '../../../core/helpers/routes';
import { sports } from '../../../core/models/models';
import { DataService } from '../../../core/service/data/data.service';
interface data {
  value: string;
}

@Component({
  selector: 'app-listing-list-sidebar',
  templateUrl: './listing-list-sidebar.component.html',
  styleUrls: ['./listing-list-sidebar.component.scss']
})
export class ListingListSidebarComponent {
  isClassAdded: boolean[] = [false, false, false];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  public sports: sports[] = [];
  fav(slide:sports){
    slide.favourite = !slide.favourite
  }
  constructor (private dataservice:DataService){
    (this.sports = this.dataservice.sports)
  }
  public routes = routes;
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
    {value: 'Lesson 2'}
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
