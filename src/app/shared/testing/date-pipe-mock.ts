import { Pipe } from '@angular/core';

/**
 * This mock is needed because the angular 2 built in date pipe
 * throws 'ReferenceError: Can't find variable: Intl' when running
 * tests with karma
 */
@Pipe({
  name: 'date',
  pure: false // required to update the value when the promise is resolved
})
export class DatePipeMock implements Pipe {
  name: string = 'date';

  transform(query: string, ...args: any[]): any {
    return query;
  }
}
