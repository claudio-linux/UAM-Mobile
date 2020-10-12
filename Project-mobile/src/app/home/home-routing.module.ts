import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'criar-festa',
    loadChildren: () => import('./criar-festa/criar-festa.module').then( m => m.CriarFestaPageModule)
  },
  {
    path: 'meu-perfil',
    loadChildren: () => import('./meu-perfil/meu-perfil.module').then( m => m.MeuPerfilPageModule)
  },
  {
    path: 'meus-eventos',
    loadChildren: () => import('./meus-eventos/meus-eventos.module').then( m => m.MeusEventosPageModule)
  },
  {
    path: 'evento-ativo',
    loadChildren: () => import('./evento-ativo/evento-ativo.module').then( m => m.EventoAtivoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
