import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItensDetailsComponent } from './itens-details/itens-details.component';
import { ItemService } from '../../services/itens.service';

export interface Item {
  name: string;
  valor: string;
  quantidade: string;
}

@Component({
  selector: 'app-evento-ativo',
  templateUrl: './evento-ativo.page.html',
  styleUrls: ['./evento-ativo.page.scss'],
})
export class EventoAtivoPage implements OnInit {
 
  public itens: Item[] = this.itensService.all();

  constructor(
    private modalController: ModalController,
    private itensService: ItemService
  ) { }

  async showDetails(item: Item){
    const modal = await this.modalController.create({
      component: ItensDetailsComponent,
      componentProps: {
        item
      }
    });

    await modal.present();

  }

  ngOnInit() {
  }

}
