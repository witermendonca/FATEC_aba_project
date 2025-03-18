import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from 'src/environments/environment';
import { IResponsavel } from '../../interfaces';
import { ResponsavelService } from './responsavel.service';

const mockResponsaveis: IResponsavel[] = [
  {
    id: 1,
    name: 'John Doe',
    cpf: '00000000000',
    email: 'test@gmail.com',
    degreeOfKinship: 'father',
    telephone: '9999999999',
  },
  {
    id: 2,
    name: 'Jane Doe',
    cpf: '00000000000',
    email: 'test@gmail.com',
    degreeOfKinship: 'mother',
    telephone: '9999999999',
  },
];

describe('ResponsavelService', () => {
  let service: ResponsavelService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.url;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResponsavelService],
    });
    service = TestBed.inject(ResponsavelService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica se não há requisições pendentes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save a responsible', () => {
    const mockResponsavel: IResponsavel = mockResponsaveis[0];

    service.saveResponsible(mockResponsavel).subscribe(response => {
      expect(response).toEqual(mockResponsavel);
    });

    const req = httpMock.expectOne(`${apiUrl}responsible`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponsavel); // Simula a resposta da API
  });

  it('should get responsibles by client ID', () => {
    service.getResponsibleByClient(1).subscribe(response => {
      expect(response).toEqual(mockResponsaveis);
    });

    const req = httpMock.expectOne(`${apiUrl}clients/1/parents`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponsaveis); // Simula a resposta da API
  });

  it('should get a responsible by ID', () => {
    const mockResponsavel: IResponsavel = mockResponsaveis[1];

    service.getResponsibleByid(1).subscribe(response => {
      expect(response).toEqual(mockResponsavel);
    });

    const req = httpMock.expectOne(`${apiUrl}responsible/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponsavel); // Simula a resposta da API
  });

  it('should update a responsible', () => {
    const mockResponsavel: IResponsavel = mockResponsaveis[0];

    service.updateResponsavel(mockResponsavel, 1).subscribe(response => {
      expect(response).toEqual(mockResponsavel);
    });

    const req = httpMock.expectOne(`${apiUrl}responsible/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockResponsavel); // Simula a resposta da API
  });

  it('should delete a responsible', () => {
    service.deleteResponsavel(1).subscribe(response => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(`${apiUrl}responsible/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null); // Simula a resposta da API
  });
});
