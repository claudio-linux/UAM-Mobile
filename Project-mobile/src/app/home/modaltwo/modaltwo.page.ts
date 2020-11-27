import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modaltwo',
  templateUrl: './modaltwo.page.html',
  styleUrls: ['./modaltwo.page.scss'],
})
export class ModaltwoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }
}
