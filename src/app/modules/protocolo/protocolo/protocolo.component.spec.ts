import { Logger } from './../../../shared/services/logger/logger.interface';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoloComponent } from './protocolo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProtocoloService } from 'src/app/shared/services';
import { MaterialModule } from 'src/app/shared/material.module';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';

/**
 * os blocos de teste são organizados usando as funções describe e it.
 * O describe é usado para agrupar um conjunto de testes relacionados. 
 * Ele define um "suite" de testes, que pode conter múltiplos testes 
 * individuais (definidos com it). Dentro de um describe, você pode 
 * organizar seus testes de forma lógica, agrupando-os por 
 * funcionalidade ou comportamento.
 */
describe('ProtocoloComponent', () => {
  let component: ProtocoloComponent;
  let fixture: ComponentFixture<ProtocoloComponent>;
  let protocoloService: ProtocoloService;
  let activatedRouteMock: any;
  let logger: Logger;

  beforeEach(async () => {
    /**
     * Mock do ActivatedRoute
     * O createSpy é usado para criar uma função espiã (spy) sem 
     * a necessidade de um objeto existente. Isso é útil quando 
     * você quer testar uma função isolada ou simular o comportamento
     * de uma função que ainda não existe.
     */
    activatedRouteMock = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('1') // Simula o ID do protocolo como '1'
        }
      }
    };

    await TestBed.configureTestingModule({
      declarations: [ProtocoloComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MaterialModule
      ],
      providers: [
        ProtocoloService,
        LoggerService,
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ]
    });
  });

  /**
   * O beforeEach e o afterEach são funções que permitem executar 
   * código antes e depois de cada teste. 
   * Isso é útil para configurar o ambiente de teste ou limpar recursos 
   * após a execução de cada teste.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocoloComponent);
    component = fixture.componentInstance;
    protocoloService = TestBed.inject(ProtocoloService);
    logger = TestBed.inject(LoggerService);
    fixture.detectChanges();
  });

  /**
   * O it define um teste individual dentro de um bloco describe
   */
  it('should create', () => {
    /**
     * as verificações de comportamento são feitas com a 
     * função expect e seus métodos de asserção.
     */
    expect(component).toBeTruthy();
  });

  it('should set protocolo id and call getProtocolo init', () => {
    /**
     * O spyOn é uma função do Jasmine que permite "espiar" 
     * um método de um objeto. Isso significa que você pode monitorar 
     * as chamadas a esse método, verificar os argumentos passados, 
     * o número de vezes que ele foi chamado, e até mesmo substituir 
     * o comportamento original do método por um comportamento simulado.
     * 
     * Principais métodos do spyOn:
     * and.returnValue(value): Substitui o método original e faz com que ele sempre retorne o valor especificado.
     * and.callFake(fn): Substitui o método original por uma função simulada (fake).
     * and.throwError(error): Faz com que o método espiado lance um erro quando for chamado.
     */

    const spy = spyOn(protocoloService, 'getProtocoloPorId');
    component.ngOnInit();

    /**
     * Os Matchers são funções que permitem verificar se uma condição é verdadeira 
     * em um teste. O Jasmine oferece uma série de matchers prontos, 
     * como toBe, toEqual, toHaveBeenCalled, entre outros.
     * Exemplos de matchers comuns: 
     * toBe: Verifica se dois valores são estritamente iguais (===). 
     * toEqual: Verifica se dois valores são iguais em termos de conteúdo (útil para objetos e arrays).
     * toHaveBeenCalled: Verifica se uma função espiã foi chamada.
     * toHaveBeenCalledWith: Verifica se uma função espiã foi chamada com argumentos específicos.
     * toThrowError: Verifica se uma função lança um erro.
     */
    expect(component.protocoloId).toBe(1); // Verifica se o ID do protocolo foi definido corretamente
    expect(spy).toHaveBeenCalledWith(1); // Verifica se o serviço foi chamado com o ID correto
  });

  it('should handle error', () => {
    const spyLoger = spyOn(logger, 'error')
    const spy = spyOn(protocoloService, 'getProtocoloPorId').and.returnValue(throwError(() => new Error('error')));
    component.getProtocolo(1);
    spy.calls.mostRecent().returnValue.subscribe({
      error: (err) => {
        expect(spyLoger).toHaveBeenCalledWith(err);
        expect(err).toEqual(new Error('error')); // Verifica se o erro emitido é o esperado
      }
    });
  });
});
