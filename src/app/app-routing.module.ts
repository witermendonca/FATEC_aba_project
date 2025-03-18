import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home.component').then(c => c.HomeComponent),
    title: 'ABA Instituto Inclusivamente',
  },
  {
    path: 'cadastro-cliente',
    loadChildren: () =>
      import('./modules/cadastro-cliente/cadastro-cliente.module').then(
        m => m.CadastroClienteModule,
      ),
    title: 'ABA Cadastro de cliente',
    data: { preload: false },
  },
  {
    path: 'cliente/:id',
    loadChildren: () => import('./modules/cliente/cliente.module').then(m => m.ClienteModule),
    title: 'ABA Detalhes do cliente',
  },
  {
    path: 'protocolo/:id',
    loadChildren: () => import('./modules/protocolo/protocolo.module').then(m => m.ProtocoloModule),
    title: 'ABA Detalhes do protocolo',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
