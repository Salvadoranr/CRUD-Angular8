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
  public allMoves: string[];
  constructor() {
    this.pokemonsList = [];
    this.getInitialResponse();
  }

  public getInitialResponse(): void {
    this.pokemonsList = apiResponse;
    this.allMoves = this.getAllMoves();
  }
  public getpokemonsList(): IPokemon[] {
    return this.pokemonsList;
  }
  public getPokemonById(id: string): IPokemon {
    // tslint:disable-next-line: radix
    return this.pokemonsList.find(el => el.id === parseInt(id));
  }
  public addPokemon(pokemon: IPokemon): void {
    this.pokemonsList.unshift(pokemon);
  }
  public updatePokemon(pokemon: IPokemon): void {
    // tslint:disable-next-line: radix
    this.pokemonsList.forEach((el: IPokemon, index: number) => {
      if (el.id === pokemon.id) {
        this.pokemonsList[index] = pokemon;
      }
    });
  }
  public deletePokemon(id: number): void {
    this.pokemonsList.forEach((el: IPokemon, index: number) => {
      if (el.id === id) {
        this.pokemonsList.splice(index, 1);
      }
    });
  }
  public getAllMoves() {
    const movesSet = new Set(this.pokemonsList.reduce((acc, el) => acc.concat(el.moves), []));
    const allMoves = new Array(...movesSet);
    return allMoves;
  }
}
