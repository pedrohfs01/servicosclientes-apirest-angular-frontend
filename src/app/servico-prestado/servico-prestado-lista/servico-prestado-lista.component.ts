import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoService } from 'src/app/services/servico-prestado.service';
import { ServicoPrestadoBusca } from './servico-prestado-busca';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  lista: ServicoPrestadoBusca[];

  constructor(private service: ServicoPrestadoService) {
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
   }

  ngOnInit(): void {
  }

  consultar(){
    this.service.buscar(this.nome, this.mes).subscribe(response =>{
      console.log(response);
      
    });
  }
}

