import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  http = inject(HttpClient);

  URL = 'http://localhost:8080/usuarios';

  constructor() { }



  list(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.URL);

  }

  delete(id:number | undefined) : Observable<Usuarios>{
    return this.http.delete<Usuarios>(`${this.URL}/${id}`);
  }

  CriarUsuario(usuario: Usuarios) : Observable<Usuarios[]>{
    return this.http.post<Usuarios[]>(this.URL,usuario);
  }


  getUsuarioId(id:number): Observable<Usuarios>{
    return this.http.get<Usuarios>(`${this.URL}/${id}`);
  }

  editarUsuario(usuario : Usuarios): Observable <Usuarios>{
    return this.http.put<Usuarios>(this.URL,usuario);
  }


}
