import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KantoPage } from './kanto.page';
import { KantoPageRoutingModule } from './kanto-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    KantoPageRoutingModule
  ],
  declarations: [KantoPage]
})
export class KantoPageModule {}
