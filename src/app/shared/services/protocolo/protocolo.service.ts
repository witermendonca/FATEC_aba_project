import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProtocol, IProtocolResponse } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProtocoloService {
  private readonly urlApi = environment.url;

  constructor(private http: HttpClient) {}

  listProtocolosByClient(id: number): Observable<IProtocolResponse[]> {
    return this.http.get<IProtocolResponse[]>(`${this.urlApi}protocol/client/${id}`);
  }

  saveProtocolo(protocol: IProtocol): Observable<HttpResponse<void>> {
    return this.http.post<void>(`${this.urlApi}protocol`, protocol, { observe: 'response' });
  }

  getProtocoloPorId(id: number): Observable<IProtocolResponse> {
    return this.http.get<IProtocolResponse>(`${this.urlApi}protocol/${id}`);
  }
}
