import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParceirosPageRoutingModule } from './parceiros-routing.module';

import { ParceirosPage } from './parceiros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParceirosPageRoutingModule
  ],
  declarations: [ParceirosPage]
})
export class ParceirosPageModule {}
