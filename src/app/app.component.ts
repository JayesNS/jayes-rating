import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public mockRatings = [
    {values: [], maxValue: 10, disabled: false, rateSubmit: null},
    {values: [2.24999999999999], maxValue: 10, disabled: false, rateSubmit: null},
    {values: [4.6], maxValue: 10, disabled: false, rateSubmit: null},
    {values: [15], maxValue: 5, disabled: false, rateSubmit: this.saveRate},
    {values: [-1], maxValue: 10, disabled: false, rateSubmit: null},
    {values: [1.1], maxValue: 10, disabled: true, rateSubmit: null}
  ];

  saveRate() {
    console.log('Here you can save rateSubmit');
  }
}
