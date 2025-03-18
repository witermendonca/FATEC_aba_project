import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacaoComponent } from './aplicacao/aplicacao.component';
import { ProtocoloComponent } from './protocolo/protocolo.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProtocoloComponent,
      },
      {
        path: 'aplicacao',
        component: AplicacaoComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtocoloRoutingModule {}
