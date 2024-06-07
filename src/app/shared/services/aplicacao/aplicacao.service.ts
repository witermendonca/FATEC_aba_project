import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AplicacaoService {

  public localStorage: any;
  private readonly urlApi = environment.url;

  constructor(private http: HttpClient) { 
    this.localStorage = window.localStorage;
  }

  getAplicacoes(idProtocolo: string) {
    const aplicacoes: any = [];
    const resultado = this.localStorage.getItem('aplicacoes');
    if(resultado) {
      JSON.parse(resultado)?.forEach((element: any) => {
        if(element.idProtocolo === idProtocolo) aplicacoes.push(element);
      });
    }
    return aplicacoes;
  }

  saveApplication(application: any): Observable<HttpResponse<void>> {
    return this.http.post<void>(`${this.urlApi}application`, application, { observe: 'response' });
  }
}
