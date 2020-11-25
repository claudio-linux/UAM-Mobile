import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarPageRoutingModule } from './criar-routing.module';

import { CriarPage } from './criar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarPageRoutingModule
  ],
  declarations: [CriarPage]
})
export class CriarPageModule {}
