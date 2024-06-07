import { ProtocoloService } from './../../../shared/services/protocolo/protocolo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponsavelService } from './../../../shared/services/responsavel/responsavel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente, IProtocolResponse, IResponsavel } from 'src/app/shared/interfaces';
import { ClienteService } from 'src/app/shared/services';
import { v4 as uuidv4 } from 'uuid';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  public cliente: ICliente | null = null;
  public idClient: number = 0;
  public formProtocolo!: FormGroup;
  public protocolos: IProtocolResponse[] = [];

  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router,
    private formBuilder: FormBuilder,
    private protocoloService: ProtocoloService,
  ) {}
  
  ngOnInit(): void {
    this.idClient = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.getClient(this.idClient);
    this.createForm();
  }

  getClient(id: number): void {
    this.subscription.add(
      this.clienteService.getClientById(id).subscribe({
        next: (response) => {
          this.cliente = response;
          this.protocolos = response.protocols || [];
        },
        error: (err) => console.error(err)
      })
    );
  }

  acessarResponsavel(event?: IResponsavel): void {
    this.router.navigate(
      [`/cliente/${this.idClient}/editar-responsavel`],
      {
        queryParams: {
          cliente: this.idClient,
          responsavel: event?.id || 0,
        }
      }
    )
  }

  acessarProtocolo(event?: IResponsavel): void {
    this.router.navigate(
      [`/cliente/${this.idClient}/editar-responsavel`],
      {
        queryParams: {
          cliente: this.idClient,
          responsavel: event?.id || 0,
        }
      }
    )
  }

  createForm(): void {
    this.formProtocolo = this.formBuilder.group({
      name: [null, [Validators.required]]
    })
  }

  getProtocolos(): void {
    this.subscription.add(
      this.protocoloService.listProtocolosByClient(this.idClient).subscribe({
        next: (resp) => {
          this.protocolos = resp;
        }
      })
    );
  }

  onCadastrar(): void {
    if(this.formProtocolo.invalid) return;
    const protocol = this.formProtocolo.getRawValue();
    protocol.createdBy = 'Witer Xavier Mendonca'
    protocol.idClient = this.idClient;
    this.subscription.add(
      this.protocoloService.saveProtocolo(protocol).subscribe({
        next: (resp) => {
          if(resp.status === 201) {
            this.getProtocolos();
          }
        },
        error: (err) => console.error(err)
      })
    );
  }

  onCancelar(): void {
    this.formProtocolo.reset();
  }
}
