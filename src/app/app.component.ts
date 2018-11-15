import { Component } from '@angular/core';

import { DataService } from './data.service';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private dataService: DataService
  ) {}

}
