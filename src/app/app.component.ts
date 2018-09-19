import { Component } from '@angular/core';
import { routerTransition } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'app';

  constructor() {}

  getState(outlet) {
    // return outlet.activatedRouteData.state;
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
