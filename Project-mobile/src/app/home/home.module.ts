import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IonicStorageModule } from '@ionic/storage';
import { HomePageRoutingModule } from './home-routing.module';
import { DetalhesItemComponent } from './detalhes-item/detalhes-item.component';
import { Storage } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicStorageModule,
    Storage
  ],
  declarations: [HomePage, DetalhesItemComponent]
})
export class HomePageModule {}
