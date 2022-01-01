import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JohtoPage } from './johto.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { JohtoPageRoutingModule } from './johto-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    JohtoPageRoutingModule
  ],
  declarations: [JohtoPage]
})
export class JohtoPageModule {}
