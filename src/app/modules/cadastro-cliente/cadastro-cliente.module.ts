import { NgModule } from '@angular/core';
import { ExpansionPanelResponsavelComponent } from 'src/app/shared/components/expansion-panel-responsavel/expansion-panel-responsavel.component';
import { FormResponsavelComponent } from 'src/app/shared/components/form-responsavel/form-responsavel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroClienteRoutingModule } from './cadastro-cliente-routing.module';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroResponsavelComponent } from './cadastro-responsavel/cadastro-responsavel.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [CadastroClienteComponent, CadastroResponsavelComponent, CadastroComponent],
  imports: [SharedModule, FormResponsavelComponent, ExpansionPanelResponsavelComponent],
  exports: [CadastroClienteRoutingModule],
})
export class CadastroClienteModule {}
