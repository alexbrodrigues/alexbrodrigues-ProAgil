import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../util/Constants';

@Pipe({
  name: 'DateTimeFormatPipe'
})
export class DateTimeFormatPipePipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(value, '_',  super.transform(value,Constants.DATE_TIME_FMT))
    return super.transform(value, Constants.DATE_TIME_FMT);
  }
}
