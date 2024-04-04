import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(time: string): string {
    if (!time) {
      return '';
    }

    const hoursIndex = time.indexOf('h');
    const minutesIndex = time.indexOf('m');

    if (hoursIndex === -1 && minutesIndex === -1) {
      return '';
    }

    let hours = '';
    let minutes = '';

    if (hoursIndex !== -1) {
      const _hours = time.slice(0, hoursIndex) ;
      if (!isNaN(Number(_hours))) {
        hours = `${_hours}h`;
      }
    }

    if (minutesIndex !== -1) {
      const startIndex = hoursIndex !== -1 ? hoursIndex + 1 : 0;
      const _minutes = time.slice(startIndex, minutesIndex);
      if (!isNaN(Number(_minutes))) {
        minutes = `${_minutes}min`;
      }
    }

    return `${hours}${(hours && minutes ? ' ' : '')}${minutes}`;
  }

}
