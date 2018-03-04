import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JayesRatingComponent } from './jayes-rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JayesRatingComponent],
  exports: [JayesRatingComponent]
})
export class JayesRatingModule { }
