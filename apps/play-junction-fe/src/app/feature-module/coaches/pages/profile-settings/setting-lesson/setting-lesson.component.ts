import { Component } from '@angular/core';
import { routes } from '../../../../../core/core.index';

@Component({
  selector: 'app-setting-lesson',
  templateUrl: './setting-lesson.component.html',
  styleUrls: ['./setting-lesson.component.scss']
})
export class SettingLessonComponent {
  public routes = routes;
}
