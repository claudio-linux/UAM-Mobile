import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CidadesPage } from './cidades.page';

const routes: Routes = [
  {
    path: '',
    component: CidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CidadesPageRoutingModule {}
