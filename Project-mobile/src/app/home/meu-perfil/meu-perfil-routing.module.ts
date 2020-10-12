import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuPerfilPage } from './meu-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: MeuPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuPerfilPageRoutingModule {}
