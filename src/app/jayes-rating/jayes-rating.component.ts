import {Component, Input, OnInit} from '@angular/core';
import {containerStart} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'jayes-rating',
  templateUrl: './jayes-rating.component.html',
  styleUrls: ['./jayes-rating.component.css']
})
export class JayesRatingComponent implements OnInit {
  @Input() value: number;

  @Input() maxValue: number;

  public stars: any[];

  constructor() {
    this.value = 0;
    this.maxValue = 10;

    this.stars = new Array(this.maxValue);
  }

  ngOnInit() {
    this.stars.fill(StarType.EMPTY_STAR);
    this.calculateStars();
  }

  calculateStars() {
    let value = this.value;
    let starType = StarType.EMPTY_STAR;

    this.stars = this.stars.map(star => {
      if (value >= 0.75) {
        starType = StarType.FULL_STAR;
      } else if (value >= 0.25) {
        starType = StarType.HALF_STAR;
      } else {
        starType = StarType.EMPTY_STAR;
      }

      --value;
      return starType;
    });
  }
}

export const StarType = {'EMPTY_STAR': 'star_border', 'HALF_STAR': 'star_half', 'FULL_STAR': 'star'};
