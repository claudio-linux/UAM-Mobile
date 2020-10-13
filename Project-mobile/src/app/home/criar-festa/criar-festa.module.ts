import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarFestaPageRoutingModule } from './criar-festa-routing.module';

import { CriarFestaPage } from './criar-festa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarFestaPageRoutingModule
  ],
  declarations: [CriarFestaPage]
})
export class CriarFestaPageModule {}
