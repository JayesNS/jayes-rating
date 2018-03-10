import {Injectable, Input} from '@angular/core';

@Injectable()
export class NgjRatingOptions {
  disabled = false;
  maxValue = 10;
  showAverage = true;
  showMaxValue = false;

  constructor() { }

}
