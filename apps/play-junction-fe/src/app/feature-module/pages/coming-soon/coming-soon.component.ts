import { Component } from '@angular/core';
import { routes } from '../../../core/core.index';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  public routes = routes;
}
