import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
interface data {
  value: string;
}
@Component({
  selector: 'app-coaches-list',
  templateUrl: './coaches-list.component.html',
  styleUrls: ['./coaches-list.component.scss']
})
export class CoachesListComponent {
  public routes = routes;
  public selectedValue1 = '';
  isClassAdded: boolean[] = [false, false, false];
  selectedList1: data[] = [
    {value: 'Relevance'},
    {value: 'Price'}
  ];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
}
