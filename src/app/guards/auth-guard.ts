import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../servicos/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.estaLogado()) {
    return true; // Libera o acesso à rota
  }

  // Bloqueia e redireciona de volta para a tela de login
  router.navigate(['/login']);
  return false;
};