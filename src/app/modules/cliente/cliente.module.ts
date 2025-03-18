import { NgModule } from '@angular/core';
import { ExpansionPanelResponsavelComponent } from 'src/app/shared/components/expansion-panel-responsavel/expansion-panel-responsavel.component';
import { FormResponsavelComponent } from 'src/app/shared/components/form-responsavel/form-responsavel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { EditResponsavelClientComponent } from './edit-responsavel-client/edit-responsavel-client.component';

@NgModule({
  declarations: [ClienteComponent, EditResponsavelClientComponent, EditClienteComponent],
  imports: [SharedModule, ExpansionPanelResponsavelComponent, FormResponsavelComponent],
  exports: [ClienteRoutingModule],
})
export class ClienteModule {}
