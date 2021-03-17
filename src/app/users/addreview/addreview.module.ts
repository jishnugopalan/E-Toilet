import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddreviewPageRoutingModule } from './addreview-routing.module';

import { AddreviewPage } from './addreview.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CommonModule,
    AddreviewPageRoutingModule
  ],
  declarations: [AddreviewPage]
})
export class AddreviewPageModule {}
