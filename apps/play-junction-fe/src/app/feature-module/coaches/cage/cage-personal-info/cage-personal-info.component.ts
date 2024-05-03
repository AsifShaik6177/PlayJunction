import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';

@Component({
  selector: 'app-cage-personal-info',
  templateUrl: './cage-personal-info.component.html',
  styleUrl: './cage-personal-info.component.scss'
})
export class CagePersonalInfoComponent {
public routes = routes
}
