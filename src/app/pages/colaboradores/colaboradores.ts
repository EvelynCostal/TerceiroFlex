import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SideMenu } from '../../components/menu-lateral/menu-lateral';
import { LISTA_COLABORADORES } from '../../servicos/mock-database';
import { Colaborador } from '../../modelo/interfaces';

@Component({
  selector: 'app-colaboradores',
  imports: [CommonModule, SideMenu, RouterLink],
  templateUrl: './colaboradores.html',
  styleUrl: './colaboradores.css',
})
export class Colaboradores {
  colaboradores: Colaborador[] = LISTA_COLABORADORES;
}
