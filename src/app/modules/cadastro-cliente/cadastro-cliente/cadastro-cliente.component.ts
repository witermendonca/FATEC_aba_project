import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICliente, IResponsavel } from 'src/app/shared/interfaces';
import { ClienteService } from 'src/app/shared/services';
import { DataClienteService } from '../service/data-cliente.service';
import { ResponsavelService } from './../../../shared/services/responsavel/responsavel.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss'],
})
export class CadastroClienteComponent implements OnInit {
  public formCadastro!: FormGroup;
  public cliente: ICliente | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private dataService: DataClienteService,
    private responsavelService: ResponsavelService,
  ) {
    this.dataService.cliente.subscribe({
      next: data => {
        if (data) {
          this.cliente = data;
        }
      },
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  save() {
    const cliente = this.formCadastro.getRawValue();
    console.log(cliente);
    this.clienteService.saveClient(cliente).subscribe({
      next: () => {
        this.formCadastro.reset();
        this.router.navigate(['/home']);
      },
      error: err => console.error(err),
    });
  }

  createForm(): void {
    this.formCadastro = this.formBuilder.group({
      name: [this.cliente?.name || '', [Validators.required]],
      email: [this.cliente?.email || '', [Validators.required, Validators.email]],
      birthday: [this.cliente?.birthday || '', [Validators.required]],
      gender: [this.cliente?.gender || '', [Validators.required]],
      cpf: [this.cliente?.cpf || '', [Validators.required]],
      telephone: [this.cliente?.telephone || '', [Validators.required]],
      educationLevel: [this.cliente?.educationLevel || ''],
      medicalInformations: [this.cliente?.medicalInformations || ''],
      medicinesInUse: [this.cliente?.medicinesInUse || ''],
      processingInformation: [this.cliente?.processingInformation || ''],
      address: this.formBuilder.group({
        cep: [this.cliente?.address?.cep || '', [Validators.required]],
        street: [this.cliente?.address?.street || '', [Validators.required]],
        addressNumber: [this.cliente?.address?.addressNumber || '', [Validators.required]],
        complement: [this.cliente?.address?.complement || ''],
        neighborhood: [this.cliente?.address?.neighborhood || '', [Validators.required]],
        city: [this.cliente?.address?.city || '', [Validators.required]],
        state: [this.cliente?.address?.state || '', [Validators.required]],
      }),
      responsible: this.formBuilder.array(this.cliente?.responsible || []),
    });
  }

  addResponsavel(event?: IResponsavel): void {
    this.cliente = this.formCadastro.getRawValue();
    this.dataService.setClient(this.formCadastro.value);
    if (event) {
      const index = this.cliente?.responsible?.indexOf(event);
      this.router.navigate(['/cadastro-cliente/cadastro-responsavel'], {
        queryParams: {
          responsavel: index,
        },
      });
      return;
    }

    this.router.navigate(['/cadastro-cliente/cadastro-responsavel']);
  }

  removeResponsavel(event: IResponsavel): void {
    if (this.cliente && this.cliente?.responsible) {
      const index = this.cliente?.responsible?.indexOf(event);
      this.cliente?.responsible.splice(index, 1);
      this.formCadastro.get('responsible')?.value.splice(index, 1);
      this.dataService.setClient(this.cliente);
    }
  }
}
