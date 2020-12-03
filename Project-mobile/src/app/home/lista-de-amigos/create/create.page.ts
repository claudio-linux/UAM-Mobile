import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Amigo, AmigosService  } from '../../../services/amigos.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {

  public emptyContact: Amigo = {
<<<<<<< HEAD
    id: null,
    username: '',
=======
>>>>>>> origin/teste
    name: '',
    email: '',
    phone: ''
  }

  constructor(
    private amigosService: AmigosService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public handleSave() {
    this.amigosService.create(this.emptyContact);
    this.navCtrl.back();
  }

}
