import { Component } from '@angular/core';
import { routes } from '../../../core/helpers/routes';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
public routes=routes
}
