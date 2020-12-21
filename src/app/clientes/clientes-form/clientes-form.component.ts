import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  id: number;

  constructor(private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params;
    if (params && params.value && params.value.id) {
      this.id = params.value.id;

      this.clienteService
        .getClienteById(this.id)
        .subscribe(response => this.cliente = response);
    }
  }

  onSubmit() {
    this.clienteService.salvar(this.cliente).subscribe(response => {
      this.success = true;
      this.errors = [];
      this.cliente = response;

    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    });
  }

  voltarListagem() {
    this.router.navigate(["/clientes-lista"])
  }
}
