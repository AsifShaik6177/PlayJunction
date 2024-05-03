import { Component } from '@angular/core';
import { routes } from '../../../../../core/core.index';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent {
public routes = routes
}
