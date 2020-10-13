import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarFestaPage } from './criar-festa.page';

const routes: Routes = [
  {
    path: '',
    component: CriarFestaPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarFestaPageRoutingModule {}
