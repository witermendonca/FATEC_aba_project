import { Subscription } from 'rxjs';
import { AplicacaoService } from './../../../shared/services/aplicacao/aplicacao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProtocoloService } from 'src/app/shared/services';

@Component({
  selector: 'app-protocolo',
  templateUrl: './protocolo.component.html',
  styleUrls: ['./protocolo.component.scss']
})
export class ProtocoloComponent implements OnInit {

  public protocoloId: any;
  public idCliente: number = 0;
  public protocolo: any;
  public aplicacoes: any;
  public displayedColumns: string[] = ['aplicacao', 'dataAplicacao', 'percentual'];

  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private service: ProtocoloService,
  ) {}

  ngOnInit(): void {
    this.protocoloId = this.route.snapshot.queryParams['protocolo'] || '0';
    this.idCliente = parseInt(this.route.snapshot.queryParams['cliente'] || '0');
    this.getProtocolo(this.protocoloId);
  }

  getProtocolo(id: any): void {
    this.subscription.add(  
      this.service.getProtocoloPorId(id).subscribe({
        next: (protocol) => {
          this.protocolo = protocol;
          this.aplicacoes = protocol.applications;
        }
      })
    );
  }
}
