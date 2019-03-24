import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countPipe'
})
export class CountPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
