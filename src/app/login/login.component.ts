import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  errors: string[];
  cadastrando: boolean;

  msgSuccess: string;

  constructor(
    private router:Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.router.navigate(['/home']);
  }

  preparaCadastro(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService.salvar(usuario)
                    .subscribe(response => {
                      this.msgSuccess = "Cadastrado com sucesso."
                      this.cancelaCadastro();
                      this.errors = [];
                      this.username = null;
                      this.password = null;
                    }, errorResponse => {
                      this.msgSuccess = null;
                      this.errors = errorResponse.error.errors;
                    })
  }
}
