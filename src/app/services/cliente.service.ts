import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(`${environment.api_url}/api/clientes`, cliente);
  }

  atualizar(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${environment.api_url}/api/clientes/${cliente.id}`, cliente);
  }

  deletar(cliente: Cliente): Observable<any>{
    return this.http.delete<any>(`${environment.api_url}/api/clientes/${cliente.id}`);
  }


  getClientes() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${environment.api_url}/api/clientes`)
  }

  getClienteById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${environment.api_url}/api/clientes/${id}`);
  }
}
