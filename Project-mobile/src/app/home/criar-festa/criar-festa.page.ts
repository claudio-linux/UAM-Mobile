import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-criar-festa',
  templateUrl: './criar-festa.page.html',
  styleUrls: ['./criar-festa.page.scss'],
})
export class CriarFestaPage implements OnInit {

  constructor(public toastController: ToastController, private cityService: City) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Evento criado com sucesso',
      duration: 4000,
      color: 'success'
      
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Evento criado com sucesso',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  ngOnInit() {
  }

}
