import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaltwoPage } from './modaltwo.page';

const routes: Routes = [
  {
    path: '',
    component: ModaltwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaltwoPageRoutingModule {}
