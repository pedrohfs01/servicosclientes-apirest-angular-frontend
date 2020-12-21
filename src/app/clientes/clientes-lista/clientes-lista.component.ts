import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      response => this.clientes = response
    );
  }

  novo(){
    this.router.navigate(["/clientes-form"]);
  }

}
