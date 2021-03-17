import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { IonicModule } from '@ionic/angular';

import { ViewmytoiletPageRoutingModule } from './viewmytoilet-routing.module';

import { ViewmytoiletPage } from './viewmytoilet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewmytoiletPageRoutingModule
  ],
  providers:[
    Geolocation,
    //NativeGeocoder
  ],
  declarations: [ViewmytoiletPage]
})
export class ViewmytoiletPageModule {}
