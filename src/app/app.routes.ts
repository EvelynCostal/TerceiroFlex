import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Dashboard } from './pages/dashboard/dashboard';
import { Empresas } from './pages/empresas/empresas';
import { Colaboradores } from './pages/colaboradores/colaboradores';
import { Documentos } from './pages/documentos/documentos';
import { Quickscan } from './pages/quickscan/quickscan';
import { DetalhesColaborador } from './pages/detalhes-colaborador/detalhes-colaborador';
import { Relatorios } from './pages/relatorios/relatorios';
import { authGuard } from './guards/auth-guard';
import { EnviarDocumento } from './pages/enviar-documento/enviar-documento';

export const routes: Routes = [

  { path: '', component: Landing },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'landing', component: Landing },
  { path: 'empresas', component: Empresas, canActivate: [authGuard] },
  { path: 'colaboradores', component: Colaboradores, canActivate: [authGuard] },
  { path: 'documentos', component: Documentos, canActivate: [authGuard] },
  { path: 'quickscan', component: Quickscan, canActivate: [authGuard] },
  { path: 'colaborador/:id', component: DetalhesColaborador, canActivate: [authGuard] },
  { path: 'relatorios', component: Relatorios, canActivate: [authGuard] },
  { path: 'enviar-documento', component: EnviarDocumento, canActivate: [authGuard] },

];
