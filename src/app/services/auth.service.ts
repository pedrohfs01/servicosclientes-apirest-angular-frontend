import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenUrl: string = environment.api_url+environment.obterTokenUrl;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated(): boolean{
    return false;
  }

  salvar(usuario: Usuario) : Observable<any>{ 
    return this.http.post<any>(`${environment.api_url}/api/usuarios/`, usuario);
  }

  tentarLogar(username: string, password: string): Observable<any>{
    const params = new HttpParams().set("username", username)
                                   .set("password", password)
                                   .set("grant_type", "password");
    
    const headers = {
      'Authorization': 'Basic '+btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
          
    return this.http.post(this.tokenUrl, params.toString(), { headers })
  }
}
