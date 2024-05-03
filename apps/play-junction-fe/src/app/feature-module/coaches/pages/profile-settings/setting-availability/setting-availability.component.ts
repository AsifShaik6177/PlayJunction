import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../../../../core/core.index';

interface data {
  value: string;
}

@Component({
  selector: 'app-setting-availability',
  templateUrl: './setting-availability.component.html',
  styleUrls: ['./setting-availability.component.scss']
})
export class SettingAvailabilityComponent {
  public routes = routes;
  public isChecked = false;
  public isChecked1 = false;
  public isChecked2 = false;
  public isChecked3 = false;
  public isChecked4 = false;
  public isChecked5 = false;
  showTimePicker: Array<string> = []
  startTime1 = new Date();
  startTime2 = new Date();
  startTime3 = new Date();
  startTime4 = new Date();
  startTime5 = new Date();
  startTime6 = new Date();
  startTime7 = new Date();
  endTime1 = new Date();
  endTime2 = new Date();
  endTime3 = new Date();
  endTime4 = new Date();
  endTime5 = new Date();
  endTime6 = new Date();
  endTime7 = new Date();

  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
  public selectedValue6 = '';
  public selectedValue7 = '';


  selectedList1: data[] = [{ value: '1 Hrs' }, { value: '2 Hrs' }, { value: '3 Hrs' }];
  selectedList2: data[] = [{ value: '1 Hrs' }, { value: '2 Hrs' }, { value: '3 Hrs' }];
  selectedList3: data[] = [{ value: '1 Hrs' }, { value: '2 Hrs' }, { value: '3 Hrs' }];
  selectedList4: data[] = [{ value: '1 Hrs' }, { value: '2 Hrs' }, { value: '3 Hrs' }];
  selectedList5: data[] = [{ value: '1 Hrs' }, { value: '2 Hrs' }, { value: '3 Hrs' }];
  selectedList6: data[] = [{ value: '1 Hrs' }, { value: '2 Hrs' }, { value: '3 Hrs' }];
  selectedList7: data[] = [{ value: '1 Hrs' }, { value: '2 Hrs' }, { value: '3 Hrs' }];

  adult = 1;
  children = 1;
  young_children = 1;
  constructor( private datePipe: DatePipe) { 

  }
  
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date)
    return this.datePipe.transform(selectedDate, 'h:mm a')
  }
  toggleTimePcker(value: string): void {

    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value
    } else {
      this.showTimePicker = []
    }
  }
}
