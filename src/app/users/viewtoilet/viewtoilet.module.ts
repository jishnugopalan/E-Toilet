import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { IonicModule } from '@ionic/angular';

import { ViewtoiletPageRoutingModule } from './viewtoilet-routing.module';

import { ViewtoiletPage } from './viewtoilet.page';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewtoiletPageRoutingModule
  ],
  declarations: [ViewtoiletPage],
  providers:[
    Geolocation,
    NativeGeocoder
  ]
})
export class ViewtoiletPageModule {}
