import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ServicoPrestado } from "../servico-prestado/servico-prestado";
import { ServicoPrestadoBusca } from "../servico-prestado/servico-prestado-lista/servico-prestado-busca";

@Injectable({
    providedIn: 'root'
})
export class ServicoPrestadoService {

    constructor(private http: HttpClient){
    }

    salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
        return this.http.post<ServicoPrestado>(`${environment.api_url}/api/servicos-prestados`, servicoPrestado);
    }

    buscar(nome: string, mes: number): Observable<ServicoPrestadoBusca[]>{

        const params = new HttpParams().set("nome", nome).set("mes", mes.toString());

        return this.http.get<ServicoPrestadoBusca[]>(`${environment.api_url}/api/servicos-prestados?${params.toString()}`);
    }
}