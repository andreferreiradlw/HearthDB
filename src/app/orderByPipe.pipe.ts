import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe'
})

export class OrderByPipePipe implements PipeTransform {
  transform(values: any, key?: string, reverse?: boolean) {
    // logs
    // console.log(values);
    console.log(key + '' + reverse);
    // array
    let sortedArray: any;
    let sortedNumbersArray: any[];
    // if array null
    if (!Array.isArray(values) || values.length <= 0) {
      // return the empty array without sorting
      return values;
    }
    // if no sort key, shuffle cards
    if (Array.isArray(values) && key === '') {
      // no key selected - sort random
      return this.sortRandom(values);
    }
    if (Array.isArray(values) && key === 'cost') {
      // filter cards without the cost value
      const filteredArray: string[] = values.filter(value => value.cost != null && value.cost !== undefined);
      // console.log(filteredArray);
      // must be 23 length
      // const filteredOutArray: string[] = values.filter(value => value.cost = null || value.cost === undefined);
      sortedNumbersArray = this.sortNumbers(filteredArray, key);
      console.log(sortedNumbersArray);
      if (reverse) {
        return this.reverseArray(sortedNumbersArray);
      } else {
        return sortedNumbersArray;
      }
    } else {
      // sort by selected key
      sortedArray = this.sort(values, key);
      if (reverse) {
        return this.reverseArray(sortedArray);
      } else {
        return sortedArray;
      }
    }
  }
  private sort(value: any[], key?: any): any[] {
    const isInside = key && key.indexOf('.') !== -1;
    if (isInside) {
      key = key.split('.');
    }
    const array: any[] = value.sort((a: any, b: any): number => {
      if (!key) {
        return a > b ? 1 : -1;
      }
      if (!isInside) {
        return a[key] > b[key] ? 1 : -1;
      }
      return this.getValue(a, key) > this.getValue(b, key) ? 1 : -1;
    });
    return array;
  }
  private sortNumbers(value: any, key?: any): any[] {
    const array: any[] = value.sort((a: any, b: any): number => {
      if (a.cost < b.cost) {
        return -1;
      }
      if (a.cost > b.cost) {
        return 1;
      } else {
        return 0;
      }
      console.log('None!!');
      /*
      if (a.cost && b.cost) {
        if(!isNaN(parseInt(a.cost.toString(), 10)) && !isNaN(parseInt(b.cost.toString(), 10))) {
          if (a.cost < b.cost) {
            return -1;
          }
          if (a.cost > b.cost) {
            return 1;
          }
          return 0;
        }
      }
      // return this.getValueNumber(a, key) - this.getValueNumber(b, key);

      if ( this.getValueNumber(a, key) < this.getValueNumber(b, key)) {
        return -1;
      }
      if ( this.getValueNumber(a, key) > this.getValueNumber(b, key)) {
        return 1;
      } else {
        console.log(isNaN(parseInt(a.cost.toString(), 10)));
        return 0;
      }
      */
    });
    return array;
  }
  private sortRandom(array: any[]): any[] {
    let currentIndex = array.length;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      const temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  private reverseArray(array: any[]) {
    // return array.reverse();
    for (let i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
      let el = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = el;
    }
    return array;
  }
  private getValue(object: any, key: any) {
    for (let i = 0, n = key.length; i < n; ++i) {
      const k = key[i];
      if (!(k in object)) {
        return;
      }
      object = object[k];
    }
    return object;
  }
  private getValueNumber(object: any, key: any): number {
    for (let i = 0, n = key.length; i < n; ++i) {
      const k = key[i];
      if (!(k in object)) {
        return;
      }
      object = parseInt(object[k].toString(), 10);
      console.log(isNaN(object));
      // object = object[k];
    }
    return object;
    // console.log(object[key]);
    // return parseInt(object[key].toString(), 10);
  }
}
