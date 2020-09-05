import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresasItem } from 'src/app/components/empresas/empresas-datasource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {

  constructor(private http: HttpClient) { }

  getEmpresas() : Observable<EmpresasItem[]>{
    return this.http.get<EmpresasItem[]>('/server/api/empresas');
  }
}
