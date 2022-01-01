import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPage } from '../pokemon/pokemon.page';
import { JohtoPage } from './johto.page';

const routes: Routes = [
  {
    path: '',
    component: JohtoPage,
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
export class JohtoPageRoutingModule {}
