import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgjRatingModule } from './ngj-rating/ngj-rating.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgjRatingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
