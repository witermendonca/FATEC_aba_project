import { TestBed } from '@angular/core/testing';

import { ProtocoloService } from './protocolo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProtocoloService', () => {
  let service: ProtocoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProtocoloService],
    });
    service = TestBed.inject(ProtocoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
