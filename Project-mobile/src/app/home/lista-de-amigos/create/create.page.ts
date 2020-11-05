import { Component, OnInit } from '@angular/core';
import { Amigo } from '../lista-de-amigos.page';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public emptyAmigo: Amigo = {
    name: '',
    email: '',
    phone: '',
    username: ''
  }

  constructor() { }

  ngOnInit() {
  }

  public handleSave(){
    console.log(this.emptyAmigo);
  }

}
