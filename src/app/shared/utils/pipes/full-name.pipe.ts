import {Pipe, PipeTransform} from '@angular/core';
import {TitleCasePipe} from '@angular/common';
import {FullNameTypes} from '../enums/full-name-types.enum';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  titleCasePipe: TitleCasePipe;

  constructor() {
    this.titleCasePipe = new TitleCasePipe();
  }

  transform(value: any, type?: FullNameTypes): any {

    if (value.firstName && value.lastName) {
      let extension = ``;

      if (type === FullNameTypes.Extended && value.extension) {
        extension = ` ${value.extension}`;
      }

      return this.titleCasePipe.transform(`${value.firstName} ${value.lastName}${extension}`);
    }

    return value;
  }
}
