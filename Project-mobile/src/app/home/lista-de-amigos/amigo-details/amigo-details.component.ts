import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Amigo} from '../lista-de-amigos.page'

@Component({
  selector: 'app-amigo-details',
  templateUrl: './amigo-details.component.html',
  styleUrls: ['./amigo-details.component.scss'],
})
export class AmigoDetailsComponent implements OnInit {

  @Input() amigo: Amigo;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  public close() {
    this.modalController.dismiss();
  }

}
