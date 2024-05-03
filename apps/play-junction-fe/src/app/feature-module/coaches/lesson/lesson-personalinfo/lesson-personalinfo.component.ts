import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

@Component({
  selector: 'app-lesson-personalinfo',
  templateUrl: './lesson-personalinfo.component.html',
  styleUrls: ['./lesson-personalinfo.component.scss']
})
export class LessonPersonalinfoComponent {
  public routes =routes;
}
