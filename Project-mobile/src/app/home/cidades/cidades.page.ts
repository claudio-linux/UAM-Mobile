import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';
import { NavController } from '@ionic/angular';
//import { CityResult } from '../../services/metaweather.service';
//import { WeatherService } from '../../services/weather.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.page.html',
  styleUrls: ['./cidades.page.scss'],
})
export class CidadesPage implements OnInit {

  mapRef = null;
  
  public query = '';
  //public suggestions: CityResult[] = [];

  constructor(
    private cityService: CityService,
    //private navCtrl: NavController,
    //private weatherService: WeatherService,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController
  ) {
  }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myLatLng = await this.getLocation();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
      loading.dismiss();
      this.addMaker(myLatLng.lat, myLatLng.lng);
    });
  }

  private addMaker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title: 'Hello World!'
    });
  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }


 /*
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
*/

}
