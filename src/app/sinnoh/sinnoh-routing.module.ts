import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonPage } from '../pokemon/pokemon.page';

import { SinnohPage } from './sinnoh.page';

const routes: Routes = [
  {
    path: '',
    component: SinnohPage
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
export class SinnohPageRoutingModule {}
