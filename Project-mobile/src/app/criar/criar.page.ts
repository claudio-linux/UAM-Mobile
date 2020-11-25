import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Item, ItemService } from '../services/itens.service';

@Component({
  selector: 'app-create',
  templateUrl: './criar.page.html',
  styleUrls: ['./criar.page.scss'],
})

export class CriarPage implements OnInit {

  public emptyItem: Item = {
    name: '',
    preco: '',
    quantidade: ''
  }
  constructor(
    private itemService: ItemService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public handleSave() {
    this.itemService.create(this.emptyItem);
    this.navCtrl.back();
  }

}
