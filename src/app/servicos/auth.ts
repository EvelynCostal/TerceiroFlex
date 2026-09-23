import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly CHAVE_LOGADO = 'terceiroflex_logado';

  fazerLogin(email: string, senha: string): boolean {
    // Ajuste aqui o e-mail e senha padrão que você utiliza para testar
    if (email === 'admin@terceiroflex.com' && senha === '123456') {
      // Define a chave correta como 'true' para sincronizar com o estaLogado()
      localStorage.setItem(this.CHAVE_LOGADO, 'true');
      localStorage.setItem('token', 'token_falso_ativo');
      return true;
    }
    return false;
  }

  // Encerra a sessão removendo as chaves
  fazerLogout(): void {
    localStorage.removeItem(this.CHAVE_LOGADO);
    localStorage.removeItem('token');
  }

  // Verifica se o usuário está autenticado
  estaLogado(): boolean {
    return localStorage.getItem(this.CHAVE_LOGADO) === 'true';
  }
}