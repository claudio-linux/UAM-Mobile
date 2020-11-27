import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItensDetailsComponent } from './itens-details/itens-details.component';
import { Item, ItemService } from '../../services/itens.service';

@Component({
  selector: 'app-evento-ativo',
  templateUrl: './evento-ativo.page.html',
  styleUrls: ['./evento-ativo.page.scss'],
})
export class EventoAtivoPage implements OnInit {//HOME PAGE BUSCANDO OS DADOS DO SERVICE
 
  public itens: Item[] = this.itensService.all();

  constructor(
    private modalController: ModalController,
    private itensService: ItemService
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async showDetails(item: Item){
    const modal = await this.modalController.create({
      component: ItensDetailsComponent,
      componentProps: {
        item
      }
    });

    await modal.present();

  }


}
