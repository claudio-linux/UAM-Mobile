import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> origin/teste

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/teste
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
<<<<<<< HEAD
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
=======
    IonicStorageModule.forRoot()
  ],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot()],
>>>>>>> origin/Master
>>>>>>> origin/teste
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
