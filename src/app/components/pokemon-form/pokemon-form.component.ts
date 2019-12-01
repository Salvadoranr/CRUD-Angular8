import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon.interface';
import { FormBuilder, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  @Input() name = '';
  @Input() image = '';
  @Input() weight = 0;
  @Input() moves = [];
  @Input() type = '';
  @Input() id = 0;
  @Output() formHandler = new EventEmitter<IPokemon>();

  pokemonForm: FormGroup;
  skills: number[];

  constructor(private formBuilder: FormBuilder) {
    this.skills = [1];
  }
  convertToArray = input => input.split(',');
  ngOnInit() {
    this.pokemonForm = this.formBuilder.group({
      name: [this.name],
      image: [this.image],
      weight: [this.weight],
      moves: [this.moves],
      type: [this.type],
      id: [this.id]
    });
  }

  formatFormValues(values: IPokemon): IPokemon {
    return {
      id: values.id,
      image: values.image,
      weight: values.weight,
      moves: this.convertToArray(values.moves),
      name: values.name,
      type: values.type
    };
  }
  onFormSubmit(values: IPokemon) {
    const pokemonValue: IPokemon = this.formatFormValues(values);
    this.formHandler.emit(pokemonValue);
    // this.pokemonForm.reset();
  }
  
}
