import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonPage } from '../pokemon/pokemon.page';

import { KalosPage } from './kalos.page';

const routes: Routes = [
  {
    path: '',
    component: KalosPage
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
export class KalosPageRoutingModule {}
