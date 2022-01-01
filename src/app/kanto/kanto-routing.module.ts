import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPage } from '../pokemon/pokemon.page';
import { KantoPage } from './kanto.page';

const routes: Routes = [
  {
    path: '',
    component: KantoPage,
  },
  {
    path: ':id',
    component: PokemonPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KantoPageRoutingModule {}
