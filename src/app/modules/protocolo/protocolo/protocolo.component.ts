import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProtocolResponse } from 'src/app/shared/interfaces';
import { IApplication } from 'src/app/shared/interfaces/aplicacao.interface';
import { ProtocoloService } from 'src/app/shared/services';
import { Logger } from 'src/app/shared/services/logger/logger.interface';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';

@Component({
  selector: 'app-protocolo',
  templateUrl: './protocolo.component.html',
  styleUrls: ['./protocolo.component.scss'],
})
export class ProtocoloComponent implements OnInit {
  public protocolo?: IProtocolResponse;
  public aplicacoes?: IApplication[];
  public aplicacoesSucesso?: IApplication[];
  public displayedColumns: string[] = ['aplicacao', 'dataAplicacao', 'percentual'];

  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProtocoloService,
    @Inject(LoggerService) private logger: Logger,
  ) {}

  ngOnInit(): void {
    const protocoloId = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.getProtocolo(protocoloId);
  }

  getProtocolo(id: number): void {
    this.subscription.add(
      this.service.getProtocoloPorId(id)?.subscribe({
        next: protocol => {
          this.protocolo = protocol;
          this.aplicacoes = protocol.applications;
          this.aplicacoesSucesso = protocol.applications
            ?.filter(item => !item.aborted)
            .sort((a, b) => {
              const c = new Date(a.createdAt);
              const d = new Date(b.createdAt);
              return c.getDate() - d.getDate();
            });
        },
        error: err => {
          this.logger.error(err);
          this.router.navigate(['/home']);
        },
      }),
    );
  }
}
