import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponsavel } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ResponsavelService {
  private readonly urlApi = environment.url;

  constructor(private http: HttpClient) {}

  saveResponsible(responsible: IResponsavel): Observable<IResponsavel> {
    return this.http.post<IResponsavel>(`${this.urlApi}responsible`, responsible);
  }

  getResponsibleByClient(id: number): Observable<IResponsavel[]> {
    return this.http.get<IResponsavel[]>(`${this.urlApi}clients/${id}/parents`);
  }

  getResponsibleByid(id: number): Observable<IResponsavel> {
    return this.http.get<IResponsavel>(`${this.urlApi}responsible/${id}`);
  }

  updateResponsavel(responsible: IResponsavel, id: number) {
    return this.http.put<IResponsavel>(`${this.urlApi}responsible/${id}`, responsible);
  }

  deleteResponsavel(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}responsible/${id}`);
  }
}
