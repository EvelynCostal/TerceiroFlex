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
    // Reseta o erro anterior ao tentar novamente
    this.erro = false;

    // Executa a validação no serviço de autenticação
    const sucesso = this.authService.fazerLogin(this.email, this.senha);
    
    if (sucesso) {
      this.router.navigate(['/dashboard']); 
    } else {
      this.erro = true; 
    }
  }
}