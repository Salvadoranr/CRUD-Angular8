import { Injectable } from '@angular/core';
import { apiResponse } from '../api/api-mock';
import { IPokemon } from '../interfaces/pokemon.interface';

// const baseUrl = 'https://pokeapi.co/api/v2/';
// const pokemonUrl = `${baseUrl}pokemon/`;
// const ElectricsPokemonUrl = `${pokemonUrl}type/13`;

@Injectable({
  providedIn: 'root'
})
export class CrudPokemonService {
  public pokemonsList: IPokemon[];
  constructor() {
    this.pokemonsList = [];
    this.getInitialResponse();
  }

  public getInitialResponse(): void {
    this.pokemonsList = apiResponse;
  }
  public getpokemonsList(): IPokemon[] {
    return this.pokemonsList;
  }
}
