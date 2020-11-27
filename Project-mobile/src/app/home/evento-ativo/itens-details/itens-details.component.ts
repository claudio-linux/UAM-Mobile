import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Item} from '../../../services/itens.service';


@Component({
  selector: 'app-itens-details',
  templateUrl: './itens-details.component.html',
  styleUrls: ['./itens-details.component.scss'],
})
export class ItensDetailsComponent implements OnInit {

  @Input() item: Item;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  public close() {
    this.modalController.dismiss();
  }

}
