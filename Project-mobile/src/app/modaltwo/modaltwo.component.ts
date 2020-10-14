import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modaltwo',
  templateUrl: './modaltwo.component.html',
  styleUrls: ['./modaltwo.component.scss'],
})
export class ModaltwoComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }

}
