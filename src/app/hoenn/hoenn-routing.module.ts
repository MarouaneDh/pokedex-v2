import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPage } from '../pokemon/pokemon.page';
import { HoennPage } from './hoenn.page';

const routes: Routes = [
  {
    path: '',
    component: HoennPage,
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
export class HoennPageRoutingModule {}
