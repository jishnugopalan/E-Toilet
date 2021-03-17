import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewtoiletPage } from './viewtoilet.page';

const routes: Routes = [
  {
    path: '',
    component: ViewtoiletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewtoiletPageRoutingModule {}
