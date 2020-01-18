import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { UpdatePokemonComponent } from './components/update-pokemon/update-pokemon.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon-form', component: FormContainerComponent },
  { path: 'pokemon-update/:id', component: UpdatePokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
