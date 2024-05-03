import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

@Component({
  selector: 'app-lesson-type',
  templateUrl: './lesson-type.component.html',
  styleUrls: ['./lesson-type.component.scss']
})
export class LessonTypeComponent {
  public routes = routes;
  activeButton: number = 0;
  setActivecheckbox(buttonNumber: number) {
    this.activeButton = buttonNumber;
  }
}
