import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ServicoPrestadoService } from 'src/app/services/servico-prestado.service';
import { ServicoPrestado } from '../servico-prestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  public clientes: Cliente[] = [];

  public servico: ServicoPrestado;

  constructor(public clienteService: ClienteService,
    public service: ServicoPrestadoService) { 
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(response => this.clientes = response);
    
  }

  onSubmit(){
    this.service.salvar(this.servico)
      .subscribe(response => {
        console.log(response);  
      });    
  }
}
