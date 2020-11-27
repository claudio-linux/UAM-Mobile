import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Item, ItemService } from '../../../services/itens.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public item: Item;
  

  constructor(
    private route: ActivatedRoute, 
    private itensService: ItemService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.item = this.itensService.get(name);
  }

  public handleSave(){
    this.itensService.updated(this.item);
    this.navCtrl.back();
  }

}
