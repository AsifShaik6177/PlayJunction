import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

interface data {
  value: string;
}
@Component({
  selector: 'app-coaches-grid-sidebar',
  templateUrl: './coaches-grid-sidebar.component.html',
  styleUrls: ['./coaches-grid-sidebar.component.scss']
})
export class CoachesGridSidebarComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  isClassAdded: boolean[] = [false, false, false];
  selected!: Date | null;
  public selectedValue = '' ;
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
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }
}
