import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'kanto',
        loadChildren: () => import('../kanto/kanto.module').then(m => m.KantoPageModule)
      },
      {
        path: 'johto',
        loadChildren: () => import('../johto/johto.module').then(m => m.JohtoPageModule)
      },
      {
        path: 'hoenn',
        loadChildren: () => import('../hoenn/hoenn.module').then(m => m.HoennPageModule)
      },
      {
        path: 'sinnoh',
        loadChildren: () => import('../sinnoh/sinnoh.module').then(m => m.SinnohPageModule)
      },
      {
        path: 'unova',
        loadChildren: () => import('../unova/unova.module').then(m => m.UnovaPageModule)
      },
      {
        path: 'kalos',
        loadChildren: () => import('../kalos/kalos.module').then(m => m.KalosPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('../pokemon/pokemon.module').then(m => m.PokemonPageModule)
      },
      {
        path: '',
        redirectTo: '/kanto',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/kanto',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
