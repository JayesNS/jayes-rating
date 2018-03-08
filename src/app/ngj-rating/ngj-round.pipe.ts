import { Pipe, PipeTransform } from '@angular/core';
import {roundPrecisely} from './ngj-rating.component';

@Pipe({
  name: 'ngjRound'
})
export class NgjRoundPipe implements PipeTransform {

  transform(value: number, precision?: number): number {
    return roundPrecisely(value, precision);
  }
}
