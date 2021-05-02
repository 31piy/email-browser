import { Pipe, PipeTransform } from '@angular/core';

/**
 * Concatenates and returns all the items of a string array by a separator.
 */
@Pipe({ name: 'simpleList' })
export class SimpleListPipe implements PipeTransform {
  /**
   * Returns a string which is created by concatenating all the items inside
   * the array using the specified separator.
   *
   * @param list The list of items.
   * @param separator The separator to use.
   */
  transform(list: string[], separator: string = ', '): string {
    return list.join(separator);
  }
}
