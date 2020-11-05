import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalonePage } from '../modalone/modalone.page';
import { AmigoDetailsComponent } from './amigo-details/amigo-details.component';

export interface Amigo {
  name: string;
  username: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-lista-de-amigos',
  templateUrl: './lista-de-amigos.page.html',
  styleUrls: ['./lista-de-amigos.page.scss'],
})
export class ListaDeAmigosPage implements OnInit {

  public amigos: Amigo[] = [
    {name: 'Matheus Fernandes', email: 'matheus.fernandes@anhembi.br', username: 'mcf1110', phone: '13 99999-9999'},
    {name: 'Claudio Gabriel', email: 'claudin_reudelas@gmail.com', username: 'craudio', phone: '13 0000-0000'},
    {name: 'Lucas Sanches', email: 'sanches.lucasc@gmail.com', username: '100Sanches', phone: '11 99999-9999'},
    {name: 'Felipe Denani', email: 'felipe.dv.fe@hotmail.com', username: 'Dedezs', phone: '11 96666-6666'},
    {name: 'Daniel Arthur', email: 'daniel_arthur2011@hotmail.com', username: 'Arthuriel', phone: '11 96666-7777'},
    {name: 'Bruno Bazzo', email: 'bazzobruno@live.com', username: 'bazzobruno', phone: '11 94480-3009'},
  ];

  constructor(private modalController: ModalController) { }

  async showDetails(amigo: Amigo){
    const modal = await this.modalController.create({
      component: AmigoDetailsComponent,
      componentProps: {
        amigo
      }
    });

    await modal.present();

  }

  ngOnInit() {
  }

}
