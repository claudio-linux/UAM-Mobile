import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalonePage } from '../modalone/modalone.page';
import { ModaltwoPage } from '../modaltwo/modaltwo.page';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

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
      component: ModaltwoPage
    });

    modal.present();
  }

  ngOnInit() {
  }

}
