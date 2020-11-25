import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import {  Item, ItemService } from '../services/itens.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  
  public item: Item;
  private name: string;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private navCtrl: NavController
  ) { }


  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.item = this.itemService.get(this.name);
  }

}
