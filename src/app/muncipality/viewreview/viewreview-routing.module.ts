import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewreviewPage } from './viewreview.page';

const routes: Routes = [
  {
    path: '',
    component: ViewreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewreviewPageRoutingModule {}
