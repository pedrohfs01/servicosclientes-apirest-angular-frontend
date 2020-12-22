import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ServicoPrestado } from "../servico-prestado/servico-prestado";

@Injectable({
    providedIn: 'root'
})
export class ServicoPrestadoService {

    constructor(private http: HttpClient){
    }

    salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
        return this.http.post<ServicoPrestado>(`${environment.api_url}/servicos-prestados`, servicoPrestado);
    }
}