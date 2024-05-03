import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

@Component({
  selector: 'app-coach-personalinfo',
  templateUrl: './coach-personalinfo.component.html',
  styleUrls: ['./coach-personalinfo.component.scss']
})
export class CoachPersonalinfoComponent {
  public routes = routes;
}
