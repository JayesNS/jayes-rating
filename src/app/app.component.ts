import { Component } from '@angular/core';
import {NgjRatingOptions} from './ngj-rating/ngj-rating-options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  average: number;

  constructor(ngjRatingOptions: NgjRatingOptions) {
    ngjRatingOptions.maxValue = 6;
    ngjRatingOptions.showMaxValue = true;
  }

  saveRate() {
    console.log('Here you can save rateSubmit');
  }
}
