import { Component } from '@angular/core';
import { routes } from '../../../core/core.index';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {
public routes = routes
}
