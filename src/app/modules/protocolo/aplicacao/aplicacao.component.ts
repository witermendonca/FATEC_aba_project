import { AplicacaoService } from './../../../shared/services/aplicacao/aplicacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProtocoloService } from 'src/app/shared/services';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-aplicacao',
  templateUrl: './aplicacao.component.html',
  styleUrls: ['./aplicacao.component.scss'],
})
export class AplicacaoComponent implements OnInit {
  public protocoloId: any;
  public idCliente: number = 0;
  public protocolo: any;
  public tentativaAtual: number = 1;
  public maxiTentativas: number = 10;
  public form!: FormGroup;
  public resultados: any = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProtocoloService,
    private formBuilder: FormBuilder,
    private router: Router,
    private applicationService: AplicacaoService,
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.protocoloId = this.route.snapshot.queryParams['protocolo'] || '0';
    this.idCliente = parseInt(this.route.snapshot.queryParams['cliente'] || '0');
    this.getProtocolo(this.protocoloId);
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      result: [null, [Validators.required]],
      help: [null],
      comments: [null],
    });
  }

  getProtocolo(id: any): void {
    this.protocolo = this.service.getProtocoloPorId(id).subscribe({
      next: (response) => this.protocolo = response,
      error: (err) => console.error(err)
    });
  }

  proximaTentativa(): void {
    if (this.tentativaAtual < this.maxiTentativas) {
      const tentativa = this.form.getRawValue();
      tentativa.attemptNumber = this.tentativaAtual;
      this.resultados.push(tentativa);
      this.tentativaAtual++;
      this.form.reset();
    }
  }

  abortar(): void {
    this.router.navigate(['/protocolo'], {
        queryParams: {
          cliente: this.idCliente,
          protocolo: this.protocoloId,
        },
      }
    );
  }

  finalizar() {
    const ultimaTentativa = this.form.getRawValue();
    ultimaTentativa.attemptNumber = this.maxiTentativas;
    this.resultados.push(ultimaTentativa);
    const successfulAttempts = this.resultados.filter((resultado: any) => resultado.result).length;
    const por = (successfulAttempts / this.resultados.length) * 100 || 0;
    const application = {
      success: successfulAttempts,
      failure: this.maxiTentativas - successfulAttempts,
      positivePercentage: por,
      aborted: null,
      reasonAbortion: null,
      createdBy: "Witer Mendonça",
	    protocolId: this.protocoloId,
      attempts: this.resultados
    };
    this.applicationService.saveApplication(application).subscribe({
      next: (resp) => {
        if(resp.status === 201) {
          this.router.navigate(['/protocolo'], {
            queryParams: {
              cliente: this.idCliente,
              protocolo: this.protocoloId,
            },
          }
        );
        }
      },
      error: (err) => console.error(err)
    });
  }
}
