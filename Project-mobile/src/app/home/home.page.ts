import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

@Input() text: string;

constructor(){}


public itens = [
  { name: 'Cerveja'},
  { name: 'Churrasco'},
];

public newItem = '';

public addToList() {
  this.itens.push({
    name: this.newItem,
  });
  this.newItem = '';
}


}