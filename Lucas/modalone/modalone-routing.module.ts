import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalonePage } from './modalone.page';

const routes: Routes = [
  {
    path: '',
    component: ModalonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalonePageRoutingModule {}
