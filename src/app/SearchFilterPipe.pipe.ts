import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchFilterPipe'
})
export class SearchFilterPipePipe implements PipeTransform {

  transform(items: any, nameSearch: string, classSearch: string, typeSearch: string): any {
    if (items && items.length){
      return items.filter(item =>{
        if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1){
          return false;
        }
        if (typeSearch && item.type.toLowerCase().indexOf(typeSearch.toLowerCase()) === -1){
          return false;
        }
        if (classSearch && item.cardClass.toLowerCase().indexOf(classSearch.toLowerCase()) === -1){
          return false;
        }
        return true;
      })
    } else {
      return items;
    }
  }

}
