import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { City, CityService } from '../../services/city.service';
import { CityResult } from '../../services/metaweather.service';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-criar-festa',
  templateUrl: './criar-festa.page.html',
  styleUrls: ['./criar-festa.page.scss'],
})
export class CriarFestaPage {

  public query = '';
  public sugestions: CityResult[] = [];
  public city: City;

  constructor(
    private cityService: CityService,
    private navCtrl: NavController,
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    public toastController: ToastController

  ) { }

  public cities = this.cityService.all();


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

  }

  public create(cr: CityResult) {
    const [lat, long] = cr.latt_long.split(',')
    this.cityService.create({
      id: cr.woeid,
      name: cr.title,
    })
    this.navCtrl.back;
  }

  public async search() {
    this.sugestions = await this.weatherService.search(this.query);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Evento criado com sucesso',
      duration: 4000,
      color: 'success'

    });
    toast.present();

  }
}