import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { CadastroClienteComponent } from "./cadastro-cliente/cadastro-cliente.component";
import { CadastroResponsavelComponent } from "./cadastro-responsavel/cadastro-responsavel.component";

const routes: Routes = [
  {
    component: CadastroComponent,
    path: '',
    children: [
      {
        path: '',
        component: CadastroClienteComponent,
      },
      {
        path: 'cadastro-responsavel',
        component: CadastroResponsavelComponent,
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroClienteRoutingModule { }
