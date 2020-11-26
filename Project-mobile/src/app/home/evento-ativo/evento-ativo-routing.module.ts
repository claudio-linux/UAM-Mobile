import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoAtivoPage } from './evento-ativo.page';

const routes: Routes = [
  {
    path: '',
    component: EventoAtivoPage
  },  {
    path: 'itens-details',
    loadChildren: () => import('./itens-details/itens-details.module').then( m => m.ItensDetailsPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoAtivoPageRoutingModule {}
