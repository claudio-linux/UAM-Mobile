import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItensDetailsPageRoutingModule } from './itens-details-routing.module';

import { ItensDetailsPage } from './itens-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItensDetailsPageRoutingModule
  ],
  declarations: [ItensDetailsPage]
})
export class ItensDetailsPageModule {}
