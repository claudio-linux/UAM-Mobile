import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CidadesPageRoutingModule } from './cidades-routing.module';

import { CidadesPage } from './cidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CidadesPageRoutingModule
  ],
  declarations: [CidadesPage]
})
export class CidadesPageModule {}
