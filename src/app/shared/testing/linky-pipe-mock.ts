import { Pipe } from '@angular/core';


@Pipe({
  name: 'linky',
  pure: true
})
export class LinkyPipeMock implements Pipe {
  name: string = 'linky';

  transform(query: string, ...args: any[]): any {
    return query;
  }
}
