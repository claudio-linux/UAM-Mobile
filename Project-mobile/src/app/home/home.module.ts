import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ModalonePage } from '../modalone/modalone.page';
import { ModaltwoComponent } from '../modaltwo/modaltwo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ModalonePage, ModaltwoComponent],
  entryComponents: [ModalonePage, ModaltwoComponent]
})
export class HomePageModule {}
