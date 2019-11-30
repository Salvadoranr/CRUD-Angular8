import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon.interface';
import { CrudPokemonService } from 'src/app/services/crud-pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonList: IPokemon[];
  constructor(private crud: CrudPokemonService) {
    this.pokemonList = [];
   }

  ngOnInit() {
    this.pokemonList = this.crud.getpokemonsList();
    console.log(this.pokemonList);
  }

}
