import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgroquimicosItem } from 'src/app/components/agroquimicos/agroquimicos-datasource';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AgroquimicosServiceService {

  constructor(private http: HttpClient) { }

  getAgroquimicos()  : Observable<AgroquimicosItem[]>{
    return this.http.get<AgroquimicosItem[]>('/server/api/agroquimicos');
  }

  getAgroquimico(id) {
    return this.http.get('/server/api/agroquimicos/' + id);
  } 

  updateAgroquimico(id, agroquimico) {
    return this.http.put('/server/api/agroquimicos/' + id, agroquimico);
  }

  createAgroquimico(agroquimico) {
    let body = JSON.stringify(agroquimico);
    return this.http.post('/server/api/agroquimicos', body, httpOptions);
  }

  deleteAgroquimico(id) {
    return this.http.delete('/server/api/agroquimicos/' + id);
  }
}
