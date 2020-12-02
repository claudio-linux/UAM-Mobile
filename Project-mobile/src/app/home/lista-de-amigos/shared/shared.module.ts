import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemFormComponent } from '../../evento-ativo/shared/components/item-form/item-form.component';
// import { AmigoFormComponent } from './components/amigo-form/amigo-form.component';


@NgModule({
  declarations: [ItemFormComponent],
  exports: [ItemFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class SharedModule { }
