import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    const shortVal = value.slice(0,args[0]);
    return shortVal;
  }

}
