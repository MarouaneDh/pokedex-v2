import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HoennPage } from './hoenn.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HoennPageRoutingModule } from './hoenn-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: HoennPage }]),
    HoennPageRoutingModule,
  ],
  declarations: [HoennPage]
})
export class HoennPageModule {}
