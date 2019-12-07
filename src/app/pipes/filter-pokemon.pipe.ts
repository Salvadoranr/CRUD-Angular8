import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'filterPokemon'
})
export class FilterPokemonPipe implements PipeTransform {

  transform(list: IPokemon[], filter: string = '') {
    const lowerCaseFilter: string = filter.toLowerCase().trim();

    const filteredList: IPokemon[] = list.filter((el: IPokemon) => {
      return el.name.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList;
  }
}


