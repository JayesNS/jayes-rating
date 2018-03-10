import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgjRatingComponent } from './ngj-rating.component';
import { NgjRoundPipe } from './ngj-round.pipe';
import {NgjRatingOptions} from './ngj-rating-options.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgjRatingComponent, NgjRoundPipe],
  exports: [NgjRatingComponent],
  providers: [NgjRatingOptions]
})
export class NgjRatingModule { }
