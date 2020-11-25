import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarPage } from './criar.page';

const routes: Routes = [
  {
    path: '',
    component: CriarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarPageRoutingModule {}
