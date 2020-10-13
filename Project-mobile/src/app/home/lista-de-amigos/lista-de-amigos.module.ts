import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDeAmigosPageRoutingModule } from './lista-de-amigos-routing.module';

import { ListaDeAmigosPage } from './lista-de-amigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeAmigosPageRoutingModule
  ],
  declarations: [ListaDeAmigosPage]
})
export class ListaDeAmigosPageModule {}
