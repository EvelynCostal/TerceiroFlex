import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly CHAVE_LOGADO = 'terceiroflex_logado';

  // Simula o login salvando a sessão no localStorage do navegador
  fazerLogin(email: string, senha: string): boolean {
    if (email && senha) {
      localStorage.setItem(this.CHAVE_LOGADO, 'true');
      return true;
    }
    return false;
  }

  // Encerra a sessão removendo a chave
  fazerLogout(): void {
    localStorage.removeItem(this.CHAVE_LOGADO);
  }

  // Verifica se o usuário está autenticado
  estaLogado(): boolean {
    return localStorage.getItem(this.CHAVE_LOGADO) === 'true';
  }
}