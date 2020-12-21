import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;

  success: boolean = false;

  errors: string[];

  constructor(private clienteService: ClienteService,
    private router: Router) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.clienteService.salvar(this.cliente).subscribe(response => {
      this.success = true;
      this.errors = [];
      this.cliente = response;
      
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    });
  }

  voltarListagem(){
    this.router.navigate(["/clientes-lista"])
  }
}
