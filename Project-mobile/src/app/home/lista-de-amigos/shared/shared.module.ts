import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmigoFormComponent } from './components/amigo-form/amigo-form.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemFormComponent } from '../../evento-ativo/shared/components/item-form/item-form.component';



@NgModule({
  declarations: [AmigoFormComponent],
  exports: [AmigoFormComponent, ItemFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class SharedModule { }
