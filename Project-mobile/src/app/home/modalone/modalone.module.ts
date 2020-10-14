import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalonePageRoutingModule } from './modalone-routing.module';

import { ModalonePage } from './modalone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalonePageRoutingModule
  ],
  declarations: [ModalonePage]
})
export class ModalonePageModule {}
