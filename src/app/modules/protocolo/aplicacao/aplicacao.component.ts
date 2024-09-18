import { Subscription } from 'rxjs';
import { AplicacaoService } from './../../../shared/services/aplicacao/aplicacao.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProtocolResponse } from 'src/app/shared/interfaces';
import { ProtocoloService } from 'src/app/shared/services';

@Component({
  selector: 'app-aplicacao',
  templateUrl: './aplicacao.component.html',
  styleUrls: ['./aplicacao.component.scss'],
})
export class AplicacaoComponent implements OnInit, OnDestroy {
  public protocoloId: any;
  public protocolo?: IProtocolResponse;
  public tentativaAtual: number = 1;
  public maxiTentativas: number = 10;
  public form!: FormGroup;
  public resultados: any[] = [];

  private subscription = new Subscription();

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
    this.getProtocolo(this.protocoloId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      result: [null, [Validators.required]],
      help: [null],
      comments: [null],
      aborted: [null]
    });
  }

  getProtocolo(id: number): void {
    this.subscription.add(
      this.service.getProtocoloPorId(id).subscribe({
        next: (response) => this.protocolo = response,
        error: (err) => console.error(err)
      })
    );
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
    if(this.resultados.length === 0) {
      this.router.navigate(['/protocolo', this.protocoloId]);
    } else {
      const successfulAttempts = this.resultados.filter((resultado: any) => resultado.result).length;
      const por = (successfulAttempts / this.resultados.length) * 100 || 0;
      const aplicacao = {
        success: successfulAttempts,
        failure: this.resultados.length - successfulAttempts,
        positivePercentage: por,
        aborted: true,
        reasonAbortion: this.form.get('aborted')?.value,
        createdBy: "Usuario Front",
        protocolId: this.protocoloId,
        attempts: this.resultados
      };
      this.salvarAplicacao(aplicacao);
    }
  }

  finalizar() {
    const ultimaTentativa = this.form.getRawValue();
    ultimaTentativa.attemptNumber = this.maxiTentativas;
    this.resultados.push(ultimaTentativa);
    const successfulAttempts = this.resultados.filter((resultado: any) => resultado.result).length;
    const por = (successfulAttempts / this.resultados.length) * 100 || 0;
    const aplicacao = {
      success: successfulAttempts,
      failure: this.resultados.length - successfulAttempts,
      positivePercentage: por,
      aborted: false,
      reasonAbortion: null,
      createdBy: "Usuario Front",
	    protocolId: this.protocoloId,
      attempts: this.resultados
    };
    this.salvarAplicacao(aplicacao);
  }

  salvarAplicacao(aplicacao: any): void {
    this.applicationService.saveApplication(aplicacao).subscribe({
      next: (resp) => {
        if(resp.status === 201) {
          this.router.navigate(['/protocolo', this.protocoloId]);
        }
      },
      error: (err) => console.error(err)
    });
  }
}
