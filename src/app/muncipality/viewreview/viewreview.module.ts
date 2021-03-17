import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewreviewPageRoutingModule } from './viewreview-routing.module';

import { ViewreviewPage } from './viewreview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewreviewPageRoutingModule
  ],
  declarations: [ViewreviewPage]
})
export class ViewreviewPageModule {}
