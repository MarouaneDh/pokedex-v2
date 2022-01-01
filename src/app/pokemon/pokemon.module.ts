import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PokemonPageRoutingModule } from './pokemon-routing.module';
import { PokemonPage } from './pokemon.page';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule
  ],
  declarations: [PokemonPage,BarChartComponent]
})
export class PokemonPageModule {}
