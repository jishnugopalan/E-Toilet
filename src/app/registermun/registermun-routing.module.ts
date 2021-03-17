import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistermunPage } from './registermun.page';

const routes: Routes = [
  {
    path: '',
    component: RegistermunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistermunPageRoutingModule {}
