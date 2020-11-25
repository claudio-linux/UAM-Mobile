import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Item } from 'src/app/services/itens.service';

@Component({
  selector: 'app-detalhes-item',
  templateUrl: './detalhes-item.component.html',
  styleUrls: ['./detalhes-item.component.scss'],
})
export class DetalhesItemComponent implements OnInit {

  @Input() item: Item;
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  public close() {
    this.modalController.dismiss();
  }

}

