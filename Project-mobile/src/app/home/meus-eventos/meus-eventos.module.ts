import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusEventosPageRoutingModule } from './meus-eventos-routing.module';

import { MeusEventosPage } from './meus-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusEventosPageRoutingModule
  ],
  declarations: [MeusEventosPage]
})
export class MeusEventosPageModule {}
