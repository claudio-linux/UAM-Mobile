import { Component, OnInit } from '@angular/core';
import { CityService } from '../../../services/city.service';
import { NavController } from '@ionic/angular';
import { CityResult } from 'src/app/services/metaweather.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

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
