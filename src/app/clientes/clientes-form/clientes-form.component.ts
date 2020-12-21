import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(urlParams => {
      this.id = urlParams['id'];

      if(this.id){
        this.clienteService
        .getClienteById(this.id)
        .subscribe(response => this.cliente = response);
      }
    });
  }

  onSubmit() {
    if (this.id) {
      this.clienteService.atualizar(this.cliente).subscribe(response => {
        this.success = true;
        this.errors = [];
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
    } else {
      this.clienteService.salvar(this.cliente).subscribe(response => {
        this.success = true;
        this.errors = [];
        this.cliente = response;

      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
    }
  }

  voltarListagem() {
    this.router.navigate(["/clientes-lista"])
  }
}
