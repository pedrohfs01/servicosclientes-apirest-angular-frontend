import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  clientes: Cliente[] = [];

  servico: ServicoPrestado;

  success: boolean = false;
  errors: string[];

  constructor(private clienteService: ClienteService,
    private service: ServicoPrestadoService,
    private router: Router) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(response => this.clientes = response);

  }

  onSubmit() {
    this.service.salvar(this.servico)
      .subscribe(response => {
        this.success = true;
        this.errors = [];
        this.servico = new ServicoPrestado();
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
  }

  voltarListagem() {
    this.router.navigate(["/servico-prestado/listagem"])
  }
}
