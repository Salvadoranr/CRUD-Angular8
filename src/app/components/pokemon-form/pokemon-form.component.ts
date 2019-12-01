import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  @Input() name = '';
  @Input() image = '';
  @Input() weigth = 0;
  @Input() move = [];
  @Input() type = '';
  @Input() id = 0;
  @Output() formHandler = new EventEmitter<IPokemon>();
  pokemonForm: FormGroup;
  skills: number[]

  constructor(private formBuilder: FormBuilder) {
    this.skills = [1];
  }

  ngOnInit() {
    this.pokemonForm = this.formBuilder.group({
      name: [this.name],
      image: [this.image],
      weigth: [this.weigth],
      move: [this.move],
      type: [this.type],
      id: [this.id]
    });
  }
  increase() {
    this.skills.push(1);
  }
  onFormSubmit(values: IPokemon) {
   
  }
  
}
