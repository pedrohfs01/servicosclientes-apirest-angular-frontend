import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;

  constructor() {
    this.cliente = new Cliente();
    this.cliente.id = 1;
    this.cliente.dataCadastro = "18/12/2020";
    this.cliente.nome = "Pedro";
    this.cliente.cpf = "2391293992"
  }

  ngOnInit(): void {
  }

}
