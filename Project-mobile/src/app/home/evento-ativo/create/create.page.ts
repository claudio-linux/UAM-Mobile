import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Item, ItemService  } from '../../../services/itens.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage  {

  public emptyItem: Item = {
    id: null,
    name: '',
    valor: '',
    quantidade: '',
  }

  constructor(
    private itensService: ItemService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  } 

  public handleSave() {
    this.itensService.create(this.emptyItem);
    this.navCtrl.back();
  }

}
