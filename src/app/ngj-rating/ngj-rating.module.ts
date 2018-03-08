import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgjRatingComponent } from './ngj-rating.component';
import { NgjRoundPipe } from './ngj-round.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgjRatingComponent, NgjRoundPipe],
  exports: [NgjRatingComponent]
})
export class NgjRatingModule { }
