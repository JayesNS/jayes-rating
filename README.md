## NgjRating
This module allows you to add customizable rating box in your Angular 7 project. You can configure basic styles (color, size, etc) and default values (eg. visibility of average, max rate value) using service.

## Tech/framework used
- TypeScript
- HTML5, CSS3

**Built with**
- [Angular7](https://angular.io)

## Features
- easy communication with component,
- customizable styles of single element or all elements,
- customizable default options of component
- minimalistic and practical

## Examples
Examples available on my [website](https://jsthats.me/ngj-rating) or directly in this repository.

## Setup
At this moment if you want to use this module you have to download it or clone repository to your computer.

If you want to test it out. After successful cloning/downloading you have to run `npm install` command in root directory and after that use `ng serve` (you need Angular to do that). Then you can watch example implementation at `localhost:4200`.

If you want to use this module separately you have to copy `ngj-rating`folder from `src/app` to your Angular folder. Then you have to add `NgjRatingModule` to `imports` array in module where you want to use `ngj-rating`.
```typescript
import { NgjRatingModule } from './ngj-rating/ngj-rating.module';

@NgModule({
  imports: [
    NgjRatingModule
  ]
})
export class AppModule { ... }
```
Finally you can add `ngj-rating` component in child component of module where you imported `NgjRatingModule` .  
```html
<ngj-rating [(values)]="values"></ngj-rating>
```
You can bind array of rates which you may fetch from server and then pass it to `values` property as shown above.

## How to use
### Options
This module provides several options which you can set via `NgjRatingOptions`
```typescript
@Component({...})
export class AppComponent {
  constructor(ngjRatingOptions: NgjRatingOptions) { ... }
}
```
or directly in `ngj-rating` tag
```html
<ngj-rating [option]="value"></ngj-rating>
```

#### Available options
- `[disabled]` - if set to `true` user *won't be able to do any action* with component (default: false),
- `[maxValue]` - it represents *maximum rate* (default: `10`),
- `[showAverage]` - option which allow you to choose whether you want to *show average or not* (default: `true`),
- `[showMaxValue]` - similar to `showAverage`, but this controls showing average and maximum possible value (default: `false`)
- `[disableAfterRateSubmit]` - setting this value to `true` allow user for example to rate multiple times (default: `true`)

#### Examples
```typescript
constructor(ngjRatingOptions: NgjRatingOptions) {
  ngjRatingOptions.maxValue = 5;
  ngjRatingOptions.showAverage= false;
}
```
or
```html
<ngj-rating [maxValue]="5" [showAverage]="false"></ngj-rating>
```
Setting options using *service* method (`NgjRatingOptions`) will affect all `ngj-rating` components. You can override global options for each element separately using *HTML* method (through `ngj-rating`).
### Accessing data from component
The module provides few way of accessing data from it.
- `[(values)]` - this *array* value allow you to pass rates fetched from database or another source .  If user add new rate, the rate will be added to the array,
- `[(average)]` - this property allow you to get average value from component. Although it is two-way data binding, passing value to `average` won't affect it. It is made to simplify use of `average` value,
- `(rateSubmit)` - you can pass function to this property which will be called when user rates. You can get `average`, `values`, `amount` exposed as parameter of your function.
#### Examples
```html
<ngj-rating [(values)]="values" [(average)]="average" (rateSubmit)="onRate($event)"></ngj-rating>
{{values}} <!-- [2, 5] -->
{{average}} <!-- 3.5 -->
```
```typescript
@Component({...})
export class AppComponent {
  average: number;
  values = [2, 5];

  onRate(event) {
    // Save new rate to database
    // event.values, event.average, event.amount
  }
}
```
### Custom styling
The component exposes few *CSS*  classes:
- `ngj-rating-box` - whole `ngj-rating` box
- `ngj-rating-container` - container of all stars 
- `ngj-rating-star` - each star separately
- `ngj-rating-rate` - style of average and max value
#### Examples
```css
/* Global styles of all ngj-rating */
.ngj-rating-star {
  color: gold
}
.ngj-rating-rate {
  color: darkslategray;
}

/* Styles with custom class */
.custom-class .ngj-rating-star {
  color: gray;
}
.custom-class .ngj-rating-container {
  border: 1px dashed gray;
}
.custom-class .ngj-rating-rate {
  color: darkslategrey;
}
```
```html
<!-- Component with global styles -->
<ngj-rating></ngj-rating>

<!-- Component with custom style -->
<ngj-rating class="custom-class"></ngj-rating>
```
## License
This module is developed under MIT license. Feel free to use it wherever you want.

MIT © [Jakub Szkarłat](https://jsthats.me/ngj-rating)
