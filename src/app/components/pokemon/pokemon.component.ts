import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon.interface';
import { CrudPokemonService } from '../../services/crud-pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: IPokemon;
  @Input() editMode: boolean;
  pokemonNumber: string;
  pokemonWeigth: string;
  pokemonType: string;
  pokemonSkills: string;
  constructor(private crud: CrudPokemonService) {
    this.pokemonNumber = 'Number';
    this.pokemonWeigth = 'Weigth';
    this.pokemonType = 'Type';
    this.pokemonSkills = 'Skills';
  }

  ngOnInit() {}
  delete() {
    this.crud.deletePokemon(this.pokemon.id);
  }
}
