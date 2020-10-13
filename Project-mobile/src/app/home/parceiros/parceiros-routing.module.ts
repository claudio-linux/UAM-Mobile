import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParceirosPage } from './parceiros.page';

const routes: Routes = [
  {
    path: '',
    component: ParceirosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParceirosPageRoutingModule {}
