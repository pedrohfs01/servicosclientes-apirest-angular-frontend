import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(`${environment.api_url}/api/usuarios/`, usuario);
  }
}
