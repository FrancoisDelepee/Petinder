import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "./model/Pet";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], searchText : string): Pet[] {
    if(searchText === undefined){
      return pets;
    }
    return pets.filter(pet => pet.name.toLowerCase().includes(searchText.toLowerCase()));
  }
}
