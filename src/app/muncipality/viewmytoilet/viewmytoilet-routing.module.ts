import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewmytoiletPage } from './viewmytoilet.page';

const routes: Routes = [
  {
    path: '',
    component: ViewmytoiletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewmytoiletPageRoutingModule {}
