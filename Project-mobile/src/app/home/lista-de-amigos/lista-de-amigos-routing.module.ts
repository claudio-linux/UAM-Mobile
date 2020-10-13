import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDeAmigosPage } from './lista-de-amigos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeAmigosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeAmigosPageRoutingModule {}
