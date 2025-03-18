import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AplicacaoService {
  private readonly urlApi = environment.url;

  constructor(private http: HttpClient) {}

  saveApplication(application: any): Observable<HttpResponse<void>> {
    return this.http.post<void>(`${this.urlApi}application`, application, { observe: 'response' });
  }
}
