import { NgModule } from '@angular/core';
import { EvolutionChartComponent } from 'src/app/shared/components/evolution-chart/evolution-chart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AplicacaoComponent } from './aplicacao/aplicacao.component';
import { ProtocoloRoutingModule } from './protocolo-routing.module';
import { ProtocoloComponent } from './protocolo/protocolo.component';

@NgModule({
  declarations: [ProtocoloComponent, AplicacaoComponent],
  imports: [SharedModule, EvolutionChartComponent],
  exports: [ProtocoloRoutingModule],
})
export class ProtocoloModule {}
