import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JayesRatingComponent } from './jayes-rating.component';
import { JayesRoundPipe } from './jayes-round.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JayesRatingComponent, JayesRoundPipe],
  exports: [JayesRatingComponent]
})
export class JayesRatingModule { }
