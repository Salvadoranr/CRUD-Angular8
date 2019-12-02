import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { UpdatePokemonComponent } from './components/update-pokemon/update-pokemon.component';
import { HeaderComponent } from './commons/header/header.component';
import { FilterPokemonPipe } from './pipes/filter-pokemon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonFormComponent,
    FormContainerComponent,
    UpdatePokemonComponent,
    HeaderComponent,
    FilterPokemonPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
