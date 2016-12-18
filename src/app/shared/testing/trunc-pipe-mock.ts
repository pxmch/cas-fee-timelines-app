import { Pipe } from '@angular/core';

@Pipe({
  name: 'trunc',
  pure: true
})
export class TruncPipeMock implements Pipe {
  name: string = 'trunc';

  transform(query: string, ...args: any[]): any {
    return query;
  }
}
