import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchFilterPipe'
})
export class SearchFilterPipePipe implements PipeTransform {

  transform(items: any,
    nameSearch: string,
    classSearch: string,
    typeSearch: string,
    setSearch: string,
    raritySearch: string,
    manaCostSearch: string): any {
    if (items && items.length) {
      return items.filter(item => {
        if (setSearch && item.set.toLowerCase().indexOf(setSearch.toLowerCase()) === -1) {
          return false;
        }
        if (manaCostSearch) {
          if (Number(manaCostSearch) === 7) {
            if (item.cost < 7) {
              return false;
            }
          } else {
            if (item.cost !== Number(manaCostSearch)) {
              return false;
            }
          }
        }
        if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1) {
          return false;
        }
        if (typeSearch && item.type.toLowerCase().indexOf(typeSearch.toLowerCase()) === -1) {
          return false;
        }
        if (classSearch && item.cardClass.toLowerCase().indexOf(classSearch.toLowerCase()) === -1) {
          return false;
        }
        if (raritySearch && item.rarity.toLowerCase().indexOf(raritySearch.toLowerCase()) === -1) {
          return false;
        }
        return true;
      });
    } else {
      return items;
    }
  }

}
