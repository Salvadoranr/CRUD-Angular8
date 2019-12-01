import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon.interface';
import { CrudPokemonService } from '../../services/crud-pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {
  public pokemon: IPokemon;
  constructor(private crud: CrudPokemonService, private router: Router) {
    this.pokemon = {
      id: 0,
      moves: [],
      name: '',
      image: '',
      weight: 0,
      type: ''
    };
  }

  ngOnInit() {}

  onFormSubmit(pokemon: IPokemon) {
    this.pokemon = pokemon;
  }
  createPokemon(): void {
    this.crud.addPokemon(this.pokemon);
    this.router.navigate(['/pokemon-list']);
  }
}
