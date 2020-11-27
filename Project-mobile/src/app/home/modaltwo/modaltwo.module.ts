import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaltwoPageRoutingModule } from './modaltwo-routing.module';

import { ModaltwoPage } from './modaltwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaltwoPageRoutingModule
  ],
  declarations: [ModaltwoPage]
})
export class ModaltwoPageModule {}
