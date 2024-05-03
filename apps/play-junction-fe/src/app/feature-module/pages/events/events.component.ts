import { Component } from '@angular/core';
import { routes } from '../../../core/helpers/routes';
import { DataService } from '../../../core/service/data/data.service';
import { events } from '../../../core/models/models';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  public routes = routes;
  public events: events[] = [];
  constructor(private dataservice: DataService) {
    this.events = this.dataservice.events;
  }
}
