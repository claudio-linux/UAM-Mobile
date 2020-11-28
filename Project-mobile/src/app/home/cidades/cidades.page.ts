import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';
import { NavController } from '@ionic/angular';
import { CityResult } from '../../services/metaweather.service';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.page.html',
  styleUrls: ['./cidades.page.scss'],
})
export class CidadesPage implements OnInit {

  public query = '';
  public suggestions: CityResult[] = [];

  constructor(
    private cityService: CityService,
    private navCtrl: NavController,
    private weatherService: WeatherService
  ) {
  }

  ngOnInit() {
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
    this.suggestions = await this.weatherService.search(this.query);
  }


}
