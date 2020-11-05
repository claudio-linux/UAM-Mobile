import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmigoFormComponent } from './components/amigo-form/amigo-form.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AmigoFormComponent],
  exports: [AmigoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class SharedModule { }
