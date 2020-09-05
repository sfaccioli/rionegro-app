import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgroquimicosItem } from 'src/app/components/agroquimicos/agroquimicos-datasource';

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
}
