import { Component } from '@angular/core';
import { routes } from '../../../core/core.index';
interface data {
  value: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [{ value: 'English (US)' }, { value: 'UK' }, { value: 'Japan' }];
  selectedList2: data[] = [{ value: '$ USD' }, { value: '$ Euro' }];
}
