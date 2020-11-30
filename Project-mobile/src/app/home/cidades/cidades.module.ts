import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CidadesPageRoutingModule } from './cidades-routing.module';

import { CidadesPage } from './cidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CidadesPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: CidadesPage
      }
    ])
  ],
  declarations: [CidadesPage]
})
export class CidadesPageModule {}
