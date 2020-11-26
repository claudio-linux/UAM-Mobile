import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItensDetailsPage } from './itens-details.page';

const routes: Routes = [
  {
    path: '',
    component: ItensDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensDetailsPageRoutingModule {}
