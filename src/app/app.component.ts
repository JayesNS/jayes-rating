import { Component } from '@angular/core';
import { NgjRatingOptions } from './ngj-rating/ngj-rating-options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  average: number;
  values = [4, 3, 5];
  rated = false;

  constructor(private options: NgjRatingOptions) {
    options.maxValue = 10;
  }
}
