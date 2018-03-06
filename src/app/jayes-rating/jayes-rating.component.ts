import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'jayes-rating',
  templateUrl: './jayes-rating.component.html',
  styleUrls: ['./jayes-rating.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JayesRatingComponent implements OnInit {
  @Input() values: number[] = [];
  @Input() maxValue = 10;
  @Input() disabled: boolean;

  public stars: any[];

  constructor() {
    this.disabled = false;
  }

  ngOnInit() {
    this.stars = new Array(this.maxValue).fill(StarType.EMPTY_STAR);

    this.values = this.normalizeValues(this.values);

    this.calculateStars();
  }

  calculateStars() {
    let average = this.average();
    let starType = StarType.EMPTY_STAR;

    this.stars = this.stars.map(star => {
      if (average >= 0.75) {
        starType = StarType.FULL_STAR;
      } else if (average >= 0.25) {
        starType = StarType.HALF_STAR;
      } else {
        starType = StarType.EMPTY_STAR;
      }
      --average;

      return starType;
    });
  }

  private average() {
    if (this.values.length === 0) {
      return 0;
    }

    const average = this.values.reduce((acc, val) => acc + val) / this.values.length;
    return roundPrecisely(average, 2);
  }

  highlight(starQuantity: number) {
    if (!this.disabled) {
      this.stars = this.stars.map((star, index) => {
        if (index <= starQuantity) {
          return StarType.FULL_STAR;
        } else {
          return StarType.EMPTY_STAR;
        }
      });
    }
  }

  rate(starQuantity: number) {
    if (!this.disabled) {
      this.values.push(starQuantity);
      this.disabled = true;
    }
  }

  normalizeValues(values: number[]) {
    return values.map(value => value < 0 ? 1 : (value > this.maxValue ? this.maxValue : value));
  }
}

export const StarType = {'EMPTY_STAR': 'star_border', 'HALF_STAR': 'star_half', 'FULL_STAR': 'star'};

export function roundPrecisely(value: number, precision?: number): number {
  const factor = Math.pow(10, precision || 0);
  const result = Math.round(value * factor) / factor;
  return result;
}
