import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistermunPageRoutingModule } from './registermun-routing.module';

import { RegistermunPage } from './registermun.page';
import { Chooser } from '@ionic-native/chooser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistermunPageRoutingModule
  ],
  declarations: [RegistermunPage]
})
export class RegistermunPageModule {}
