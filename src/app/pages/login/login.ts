import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicos/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  senha = '';
  erro = false;

  constructor(private authService: AuthService, private router: Router) {}

  entrar() {
    const sucesso = this.authService.fazerLogin(this.email, this.senha);
    if (sucesso) {
      this.router.navigate(['/']); // Redireciona para o Dashboard após logar
    } else {
      this.erro = true;
    }
  }
}