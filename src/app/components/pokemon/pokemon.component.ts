import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: IPokemon;
  pokemonNumber: string;
  pokemonWeigth: string;
  pokemonType: string;
  pokemonSkills: string;
  constructor() {
    this.pokemonNumber = 'Numero';
    this.pokemonWeigth = 'Weigth';
    this.pokemonType = 'Type';
    this.pokemonSkills = 'Skills';
  }

  ngOnInit() {}
}
