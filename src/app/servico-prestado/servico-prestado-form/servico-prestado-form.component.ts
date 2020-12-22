import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ServicoPrestado } from '../servico-prestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];

  public servico: ServicoPrestado;

  constructor(private clienteService: ClienteService) { 
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(response => this.clientes = response);
    
  }

  onSubmit(){
    console.log(this.servico);
    
  }
}
