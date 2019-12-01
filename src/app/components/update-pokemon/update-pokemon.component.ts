import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudPokemonService } from '../../services/crud-pokemon.service';
import { IPokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-update-pokemon',
  templateUrl: './update-pokemon.component.html',
  styleUrls: ['./update-pokemon.component.scss']
})
export class UpdatePokemonComponent implements OnInit {
  pokemon: IPokemon;
  constructor(
    private crud: CrudPokemonService,
    private activeRouter: ActivatedRoute

  ) {
    this.pokemon = {
      id: 0,
      moves: [],
      name: '',
      image: '',
      weight: 0,
      type: ''
    };
  }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(params => {
      const id = params.get('id');
      this.pokemon = this.crud.getPokemonById(id);
    });
  }
  onFormSubmit(pokemon: IPokemon) {
    this.pokemon = pokemon;
  }
  setPokemon(): void{
    this.crud.updatePokemon(this.pokemon);
  }
}
