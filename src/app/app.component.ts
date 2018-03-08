import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  average: number;

  public mockRatings = [
    {desc: 'No values', values: [], maxValue: 10, disabled: false, rateSubmit: null},
    {desc: 'Rounding', values: [2.24999999999999], maxValue: 10, disabled: false, rateSubmit: null},
    {desc: 'Multiple values', values: [4.6, 5.6], maxValue: 10, disabled: false, rateSubmit: null},
    {desc: 'Out of range (too high)', values: [15], maxValue: 5, disabled: false, rateSubmit: this.saveRate},
    {desc: 'Out of range (too low)', values: [-1], maxValue: 10, disabled: false, rateSubmit: null},
    {desc: 'Disabled', values: [1.1], maxValue: 10, disabled: true, rateSubmit: null},
    {desc: 'Customized class', values: [1.0001], maxValue: 10, disabled: false, rateSubmit: null, class: 'color-red'}
  ];

  saveRate() {
    console.log('Here you can save rateSubmit');
  }
}
