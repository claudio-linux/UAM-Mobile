import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoAtivoPageRoutingModule } from './evento-ativo-routing.module';

import { EventoAtivoPage } from './evento-ativo.page';
import { ItensDetailsComponent } from './itens-details/itens-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoAtivoPageRoutingModule
  ],
  declarations: [EventoAtivoPage, ItensDetailsComponent]
})
export class EventoAtivoPageModule {}
