import { Subscription } from 'rxjs';
import { AplicacaoService } from './../../../shared/services/aplicacao/aplicacao.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProtocoloService } from 'src/app/shared/services';
import { IProtocol, IProtocolResponse } from 'src/app/shared/interfaces';
import { IApplication } from 'src/app/shared/interfaces/aplicacao.interface';

@Component({
  selector: 'app-protocolo',
  templateUrl: './protocolo.component.html',
  styleUrls: ['./protocolo.component.scss']
})
export class ProtocoloComponent implements OnInit {

  public protocoloId?: number;
  public protocolo?: IProtocolResponse;
  public aplicacoes?: IApplication[];
  public aplicacoesSucesso?: IApplication[];
  public displayedColumns: string[] = ['aplicacao', 'dataAplicacao', 'percentual'];

  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private service: ProtocoloService,
  ) {}

  ngOnInit(): void {
    this.protocoloId = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.getProtocolo(this.protocoloId);
  }

  getProtocolo(id: any): void {
    this.subscription.add(  
      this.service.getProtocoloPorId(id).subscribe({
        next: (protocol) => {
          this.protocolo = protocol;
          this.aplicacoes = protocol.applications;
          this.aplicacoesSucesso = protocol.applications?.filter((item) => !item.aborted);
          console.log(this.aplicacoesSucesso);
        }
      })
    );
  }
}
