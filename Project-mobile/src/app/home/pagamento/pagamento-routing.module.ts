import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentoPage } from './pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentoPageRoutingModule {}
