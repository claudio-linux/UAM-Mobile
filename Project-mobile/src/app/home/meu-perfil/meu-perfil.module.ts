import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeuPerfilPageRoutingModule } from './meu-perfil-routing.module';

import { MeuPerfilPage } from './meu-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeuPerfilPageRoutingModule
  ],
  declarations: [MeuPerfilPage]
})
export class MeuPerfilPageModule {}
