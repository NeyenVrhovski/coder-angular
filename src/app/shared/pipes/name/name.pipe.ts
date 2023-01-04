import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(args[0] === 'short')
    {
      let nameArray = value.split(' ');
      let firstname = nameArray[0];
      let lastname = nameArray[1];
      let firstLetter = firstname.substring(0, 1);
      firstLetter = firstLetter.toLocaleUpperCase();
      return `${firstLetter}. ${lastname}`
    }else
    {
      return value
    }
  }

}
