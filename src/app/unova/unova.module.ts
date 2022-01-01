import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnovaPageRoutingModule } from './unova-routing.module';

import { UnovaPage } from './unova.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnovaPageRoutingModule
  ],
  declarations: [UnovaPage]
})
export class UnovaPageModule {}
