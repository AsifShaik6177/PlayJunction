import { Component } from '@angular/core';
import { routes } from '../../../core/helpers/routes';
import { Coaches, allservices,coaching, lessons } from '../../../core/models/models';
import { DataService } from '../../../core/service/data/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
public routes=routes
public allservices:allservices [] = [];
public coaching:coaching[] = [];
public lessons:lessons[] = [];
public Coaches:Coaches[] = [];
constructor (private dataservice:DataService){
  this.allservices= this.dataservice.allservices 
  this.coaching= this.dataservice.coaching 
  this.lessons= this.dataservice.lessons
 this.Coaches=this.dataservice.Coaches
}
}
