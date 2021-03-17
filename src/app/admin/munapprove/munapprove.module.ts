import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MunapprovePageRoutingModule } from './munapprove-routing.module';

import { MunapprovePage } from './munapprove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MunapprovePageRoutingModule
  ],
  declarations: [MunapprovePage]
})
export class MunapprovePageModule {}
