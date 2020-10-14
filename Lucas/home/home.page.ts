import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalonePage } from '../modalone/modalone.page';
import { ModaltwoComponent } from '../modaltwo/modaltwo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public gridSize = 4;

  public mostrar(id){
    if (document.getElementById(id).style.display == 'block'){
      document.getElementById(id).style.display = 'none';
    }
    else {
      document.getElementById(id).style.display = 'block';
    }
  }

  constructor(
    private modalCtrl: ModalController
  ){}

  async showModalOne() {
    const modal = await this.modalCtrl.create({
      component: ModalonePage
    });

    modal.present();
  }

  async showModalTwo() {
    const modal = await this.modalCtrl.create({
      component: ModaltwoComponent
    });

    modal.present();
  }

}
