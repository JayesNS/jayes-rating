import { Pipe, PipeTransform } from '@angular/core';
import {roundPrecisely} from './jayes-rating.component';

@Pipe({
  name: 'jayesRound'
})
export class JayesRoundPipe implements PipeTransform {

  transform(value: number, precision?: number): number {
    return roundPrecisely(value, precision);
  }

}
