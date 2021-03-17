import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletetoiletPage } from './deletetoilet.page';

const routes: Routes = [
  {
    path: '',
    component: DeletetoiletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletetoiletPageRoutingModule {}
