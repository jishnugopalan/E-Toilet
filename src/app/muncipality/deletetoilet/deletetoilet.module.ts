import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletetoiletPageRoutingModule } from './deletetoilet-routing.module';

import { DeletetoiletPage } from './deletetoilet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletetoiletPageRoutingModule
  ],
  declarations: [DeletetoiletPage]
})
export class DeletetoiletPageModule {}
