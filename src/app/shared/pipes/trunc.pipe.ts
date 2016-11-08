import {Pipe, PipeTransform} from '@angular/core';

/**
 * Truncate a string
 * @param text Text to be truncated
 * @param limit Max length of the text. Default: 15
 * @param suffix Text appended to the end of a truncted string.
 */

@Pipe({
  name: 'trunc'
})
export class TruncPipe implements PipeTransform {
  transform(text: string, limit = 15, suffix = '...'): any {
    if (text.length <= limit) {
      return text;
    }

    return text.substring(0, limit) + suffix;
  }
}
