import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonasItem } from 'src/app/components/personas/personas-datasource';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getPersonas() : Observable<PersonasItem[]>{
    return this.http.get<PersonasItem[]>('/server/api/personas');
  }

  getPersona(id) {
    return this.http.get('/server/api/personas/' + id);
  }

  updatePersona(id, persona) {
    return this.http.put('/server/api/personas/' + id, persona);
  }

  createPersona(persona) {
    let body = JSON.stringify(persona);
    return this.http.post('/server/api/personas', body, httpOptions);
  }

  deletePersona(id) {
    return this.http.delete('/server/api/personas/' + id);
  }
}
