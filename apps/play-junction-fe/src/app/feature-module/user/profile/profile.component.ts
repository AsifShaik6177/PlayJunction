import { Component, NgZone, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { routes } from '../../../core/helpers/routes';
import { UserProfile, userProfile } from '../../../core/models/models';
import { AuthService } from '../../../core/service/auth/authservice';

interface data {
  value: string;
}

export interface skill {
  sportName: string;
  skillLevel:string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public selectedValue1 = '';
  public selectedExpertiseLevel = '';
  public selectedSportLevel = '';
  selectedList1: data[] = [
    {value: 'Country'},
    {value: 'Texas'},
  ];
  sportsList:data[]=[
    { value: 'Badminton' },
    { value: 'Basketball' },
    { value: 'Cricket' },
    { value: 'Volleyball' },
  ];
  expertiseLevels:data[]=[
    {value : 'Novice'},
    {value : 'Beginner'},
    {value : 'Intermediate'},
    {value : 'Advanced'},
    {value : 'Expert'}
  ];
  skillSummary: skill[] = [];
  public routes = routes;
  public profileSettingsForm!: UntypedFormGroup;
  selectedFile: any;
  imageUrl: any = '';
  userData: userProfile;
  constructor(
    private auth: AuthService,
    private formBuilder: UntypedFormBuilder,
    private ngZone: NgZone
  ) {
    this.userData = new UserProfile(JSON.parse(localStorage.getItem('userData')??'{}'))
  }
  ngOnInit(): void {
    // Add Ticket Form Validation And Getting Values
    this.profileSettingsForm = this.formBuilder.group({
      name: [this.userData.name, [Validators.required]],
      email: [this.userData.email, [Validators.required]],
      phoneNumber: [this.userData.phoneNumber, [Validators.required]],
      about: [this.userData.about, [Validators.required]],
      interests: [this.userData.interests, [Validators.required]],
      address: [this.userData.address, [Validators.required]],
      state: [this.userData.state, [Validators.required]],
      city: [this.userData.city, [Validators.required]],
      zipCode: [this.userData.zipcode, [Validators.required]],
    });
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
      this.selectedFile = files[0];
  
      // Convert file to base64 (optional)
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result; // This holds the base64 string
      };
      reader.onerror = (error) => {
        console.error('Error converting file to base64:', error);
      };
    }
  }

  addSport():void {
    this.skillSummary.push({sportName:this.selectedSportLevel, skillLevel: this.selectedExpertiseLevel});
    this.sportsList = this.sportsList.filter(x=>x.value!==this.selectedSportLevel);
    this.selectedExpertiseLevel = this.selectedSportLevel = '';
    this.userData.skillLevels = this.skillSummary;
  }

  saveProfile(){
    
  }

  updateData(){

  }
}
