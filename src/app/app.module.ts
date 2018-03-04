import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {JayesRatingModule} from './jayes-rating/jayes-rating.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JayesRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
