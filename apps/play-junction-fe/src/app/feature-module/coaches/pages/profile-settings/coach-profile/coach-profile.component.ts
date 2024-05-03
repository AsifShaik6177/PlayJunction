import { Component } from '@angular/core';
import { routes } from '../../../../../core/core.index';
interface data {
  value: string;
}
@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss'],
})
export class CoachProfileComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';

  selectedList1: data[] = [
    { value: 'Expert' },
    { value: 'Experience' },
    { value: '3' }
  ];
  selectedList2: data[] = [
    { value: '5' },
    { value: '4' },
    { value: '3' },
    { value: '2' },
    { value: '1' },
  ];
  selectedList3: data[] = [
    { value: 'Both Onetime & Lesson Type' },
    { value: 'Both Onetime' },
    { value: 'Lesson Type' },
  ];
  selectedList4: data[] = [{ value: 'Country' }, { value: 'Texas' }];
}
