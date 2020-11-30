import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityResult } from './metaweather.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public search(query: string){
    const url = 'https://www.metaweather.com/api/location/search/?query=${query}';
    return this.http.get(url).toPromise() as Promise<CityResult[]>;
  }
}

