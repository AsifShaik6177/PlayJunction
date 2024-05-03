import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
interface data {
  value: string;
}

@Component({
  selector: 'app-cage-details',
  templateUrl: './cage-details.component.html',
  styleUrl: './cage-details.component.scss'
})
export class CageDetailsComponent {
  public routes = routes
  
  public selectedValue1 = '';
  showTimePicker: Array<string> = []
  date = new Date();
  zones: Date = new Date();
  mytime: Date = new Date();
  myTime: Date = new Date();
  selectedList1: data[] = [
    {value: 'Select City'},
    {value: 'Toronto'},
    {value: 'Texas'},
  ];
  adult = 1;
  children = 1;
  young_children = 1;
  constructor( private datePipe: DatePipe) { 

  }

  increment(res:number) {    
    if(res === 1) {
      this.adult++;
    }
    if(res === 2) {
      this.children++;
    }
    if(res === 3) {
      this.young_children++;
    }
  }
  decrement(res:number) {
    if(res === 1) {
      if (this.adult > 0) {
        this.adult--;
      }
    }
    if(res === 2) {
      if (this.children > 0) {
        this.children--;
      }
    }
    if(res === 3) {
      if (this.young_children > 0) {
        this.young_children--;
      }
    }
  }
  toggleTimePcker(value: string): void {

    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value
    } else {
      this.showTimePicker = []
    }
  }
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date)
    return this.datePipe.transform(selectedDate, 'h:mm a')
  }
}
