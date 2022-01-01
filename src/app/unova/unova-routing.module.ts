import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonPage } from '../pokemon/pokemon.page';

import { UnovaPage } from './unova.page';

const routes: Routes = [
  {
    path: '',
    component: UnovaPage
  },
  {
    path: ':id',
    component: PokemonPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnovaPageRoutingModule {}
