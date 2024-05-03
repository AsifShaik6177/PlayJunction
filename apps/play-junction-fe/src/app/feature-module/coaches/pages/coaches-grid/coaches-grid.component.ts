import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
interface data {
  value: string;
}
@Component({
  selector: 'app-coaches-grid',
  templateUrl: './coaches-grid.component.html',
  styleUrls: ['./coaches-grid.component.scss']
})
export class CoachesGridComponent {
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
