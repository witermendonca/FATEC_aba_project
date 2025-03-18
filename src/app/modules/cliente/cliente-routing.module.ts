import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { EditResponsavelClientComponent } from './edit-responsavel-client/edit-responsavel-client.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ClienteComponent,
      },
      {
        path: 'editar-responsavel',
        component: EditResponsavelClientComponent,
      },
      {
        path: 'editar-cliente/:id',
        component: EditClienteComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
