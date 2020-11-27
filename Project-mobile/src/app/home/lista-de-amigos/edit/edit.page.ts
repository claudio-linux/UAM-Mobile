import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Amigo, AmigosService } from '../../../services/amigos.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public contact : Amigo;
  
  constructor(
    private route: ActivatedRoute, 
    private amigoService: AmigosService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.contact = this.amigoService.get(name);
  }

  public handleSave(){
    this.amigoService.updated(this.contact);
    this.navCtrl.back();
  }
}
