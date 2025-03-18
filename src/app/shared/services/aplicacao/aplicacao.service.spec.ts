import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AplicacaoService } from './aplicacao.service';

describe('AplicacaoService', () => {
  let service: AplicacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AplicacaoService],
    });
    service = TestBed.inject(AplicacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
