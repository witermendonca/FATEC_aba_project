import { RouterModule, Routes } from '@angular/router';
import { ProtocoloComponent } from './protocolo/protocolo.component';
import { AplicacaoComponent } from './aplicacao/aplicacao.component';
import { NgModule } from '@angular/core';

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
