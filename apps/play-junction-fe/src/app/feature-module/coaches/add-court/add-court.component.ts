import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { routes } from '../../../core/helpers/routes';
import { SportEvent } from '../../../core/core.index';
import { EventService } from '../../../../services/event.service';
import { Router } from '@angular/router';
interface data {
  value: string;
}

@Component({
  selector: 'app-add-court',
  templateUrl: './add-court.component.html',
  styleUrl: './add-court.component.scss',
})
export class AddCourtComponent {
  public routes = routes;
  public isChecked = false;
  public isChecked1 = false;
  public isChecked2 = false;
  public isChecked3 = false;
  public isChecked4 = false;
  public isChecked5 = false;
  public isChecked6 = false;
  public isChecked7 = false;
  include1: boolean = true;
  include2: boolean = true;
  include3: boolean = true;
  include4: boolean = true;
  include5: boolean = true;
  include6: boolean = false;
  include7: boolean = false;
  include8: boolean = false;
  include9: boolean = false;

  amenity1: boolean = false;
  amenity2: boolean = true;
  amenity3: boolean = false;
  amenity4: boolean = true;
  amenity5: boolean = false;

  showTimePicker: Array<string> = [];

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
  public sportValue = '';
  public dltImg1 = true;
  public dltImg2 = true;
  public dltImg3 = true;
  public dltImg4 = true;

  selectedList1: data[] = [
    { value: '1 Hrs' },
    { value: '2 Hrs' },
    { value: '3 Hrs' },
  ];
  selectedList2: data[] = [
    { value: '1 Hrs' },
    { value: '2 Hrs' },
    { value: '3 Hrs' },
  ];
  selectedList3: data[] = [
    { value: '1 Hrs' },
    { value: '2 Hrs' },
    { value: '3 Hrs' },
  ];
  selectedList4: data[] = [
    { value: '1 Hrs' },
    { value: '2 Hrs' },
    { value: '3 Hrs' },
  ];
  selectedList5: data[] = [
    { value: '1 Hrs' },
    { value: '2 Hrs' },
    { value: '3 Hrs' },
  ];
  selectedList6: data[] = [
    { value: '1 Hrs' },
    { value: '2 Hrs' },
    { value: '3 Hrs' },
  ];
  selectedList7: data[] = [
    { value: '1 Hrs' },
    { value: '2 Hrs' },
    { value: '3 Hrs' },
  ];

  private eventData = new SportEvent();
  venueRules: string[] = [];
  currentVenueRule = '';

  sportName: string = '';
  eventName: string = '';
  venuePricePerPerson: number = 0;
  maxGuests: number = 0;
  overviewData: string = '';
  includes: string = '';
  amneties: string = '';
  venueRule: string = '';
  address: string = '';
  state: string = '';
  city: string = '';
  country: string = '';

  sportList: data[] = [
    { value: 'Badminton' },
    { value: 'Basketball' },
    { value: 'Cricket' },
    { value: 'Volleyball' },
  ];

  adult = 1;
  children = 1;
  young_children = 1;
  gallery: string[] = [];
  selectedFile: any;
  constructor(private datePipe: DatePipe, private renderer: Renderer2, private eventService: EventService, private router:Router) {}

  formatTime(date: Date) {
    const selectedDate: Date = new Date(date);
    return this.datePipe.transform(selectedDate, 'h:mm a');
  }
  toggleTimePcker(value: string): void {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }
  images: any[] = [];

  dltImage4() {
    this.dltImg4 = !this.dltImg4;
  }
  toggleImage(index: number): void {
    delete this.images[index];
  }

  scrollToSection(section: HTMLElement) {
    if (section) {
      this.scrollTo(section);
    }
  }

  scrollTo(element: any) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  activeTab: string = 'basicInfo';

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }

  registerEvent() {}
  addRule() {
    this.venueRules.push(this.currentVenueRule);
    this.currentVenueRule = '';
  }

  createEvent() {
    this.eventData.sportName = this.sportName;
    this.eventData.eventName = this.eventName;
    this.eventData.venuePrice = String(this.venuePricePerPerson);
    this.eventData.maxGuests = String(this.maxGuests);
    this.eventData.availability = this.setAvailability();
    this.eventData.overview = this.overviewData;
    this.eventData.venueRules = this.venueRules.join(';');
    this.eventData.amneties = this.getAmnetics();
    this.eventData.gallery = this.images.map(x=>x.image);
    this.eventData.address = this.address;
    this.eventData.address = this.address;
    this.eventData.city = this.city;
    this.eventData.country = this.country;
    this.eventData.postedBy = JSON.parse(localStorage.getItem('userData')??'{}')?._id;
    this.eventService.registerNewEvent(this.eventData).subscribe(x=>{
      this.router.navigate([routes.home])
    })
  }

  setAvailability(): string[] {
    var availabilityList = [];
    if (this.isChecked && this.startTime1.getTime() < this.endTime1.getTime()) {
      var availability = '';
      availability += 'Monday@';
      availability += `${this.startTime1.toLocaleTimeString()}-${this.endTime1.toLocaleTimeString()}`;
      availabilityList.push(availability);
    }
    if (
      this.isChecked1 &&
      this.startTime2.getTime() < this.endTime2.getTime()
    ) {
      var availability = '';
      availability += 'Tuesday@';
      availability += `${this.startTime2.toLocaleTimeString()}-${this.endTime2.toLocaleTimeString()}`;
      availabilityList.push(availability);
    }
    if (
      this.isChecked2 &&
      this.startTime3.getTime() < this.endTime3.getTime()
    ) {
      var availability = '';
      availability += 'Wednesday@';
      availability += `${this.startTime3.toLocaleTimeString()}-${this.endTime3.toLocaleTimeString()}`;
      availabilityList.push(availability);
    }
    if (
      this.isChecked3 &&
      this.startTime4.getTime() < this.endTime4.getTime()
    ) {
      var availability = '';
      availability += 'Thursday@';
      availability += `${this.startTime4.toLocaleTimeString()}-${this.endTime4.toLocaleTimeString()}`;
      availabilityList.push(availability);
    }
    if (
      this.isChecked4 &&
      this.startTime5.getTime() < this.endTime5.getTime()
    ) {
      var availability = '';
      availability += 'Friday@';
      availability += `${this.startTime5.toLocaleTimeString()}-${this.endTime5.toLocaleTimeString()}`;
      availabilityList.push(availability);
    }
    if (
      this.isChecked5 &&
      this.startTime6.getTime() < this.endTime6.getTime()
    ) {
      var availability = '';
      availability += 'Saturday@';
      availability += `${this.startTime6.toLocaleTimeString()}-${this.endTime6.toLocaleTimeString()}`;
      availabilityList.push(availability);
    }
    if (
      this.isChecked6 &&
      this.startTime7.getTime() < this.endTime7.getTime()
    ) {
      var availability = '';
      availability += 'Sunday@';
      availability += `${this.startTime7.toLocaleTimeString()}-${this.endTime7.toLocaleTimeString()}`;
      availabilityList.push(availability);
    }
    return availabilityList;
  }

  getAmnetics() {
    var amneties = '';
    if (this.amenity1) {
      amneties += 'Parking;';
    }
    if (this.amenity2) {
      amneties += 'Drinking Water;';
    }
    if (this.amenity3) {
      amneties += 'First Aid;';
    }
    if (this.amenity4) {
      amneties += 'Change Room;';
    }
    if (this.amenity5) {
      amneties += 'Shower;';
    }
    return amneties;
  }

  getincludes() {
    var includes = '';
    if (this.include1) {
      includes+='Badminton Racket Unlimited;';}
    if (this.include2) {
      includes+='Bats;';
    } if (this.include3) {
      includes+='Hitting Machines;';
    } if (this.include4) {
      includes+='Multiple Courts;';
    } if (this.include5) {
      includes+='Spare Players;';
    } if (this.include6) {
      includes+='Instant Racket;';
    } if (this.include7) {
      includes+='Green Turfs;';
    } if (this.include8) {
      includes+='Balls Provided;';
    } if (this.include9) {
      includes+='Equipment Included;';
    }
  }

  setAmneties(amneties: string) {
    if (amneties.includes('Parking;')) {
      this.amenity1;
    }
    if (amneties.includes('Drinking Water;')) {
      this.amenity2;
    }
    if (amneties.includes('First Aid;')) {
      this.amenity3;
    }
    if (amneties.includes('Change Room;')) {
      this.amenity4;
    }
    if (amneties.includes('Shower;')) {
      this.amenity5;
    }
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    // Check if a file is selected
    if (files && files.length > 0) {
      // Validate file type (accept only images)
      const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      const fileType = files[0].type;
      if (!acceptedImageTypes.includes(fileType)) {
        alert('Only image files (JPEG, PNG, GIF) are allowed!');
        return;
      }
      var selectedFile = files[0];
  
      // Convert file to base64 (optional)
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = (event: any) => {
        this.images.push({image: event.target.result, isVisible:true}); // This holds the base64 string
      };
      reader.onerror = (error) => {
        console.error('Error converting file to base64:', error);
      };
    }
  }
}
