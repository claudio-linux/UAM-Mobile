import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public contribuicoes=[
  {id: 1, name: 'Cerveja', preco:50},
  {id: 2, name: 'Churrasco', preco:100},
  {id: 3, name: 'Doce', preco:20}
]

constructor(){}

}
