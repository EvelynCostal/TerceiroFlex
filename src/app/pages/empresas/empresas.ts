import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SideMenu } from '../../components/menu-lateral/menu-lateral';
import { LISTA_EMPRESAS } from '../../servicos/mock-database';
import { Empresa } from '../../modelo/interfaces';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SideMenu],
  templateUrl: './empresas.html',
  styleUrl: './empresas.css'
})
export class Empresas {
  // Puxa os dados diretamente do banco falso centralizado
  listaEmpresas: Empresa[] = LISTA_EMPRESAS;

  // Lista dinâmica utilizada para alimentar a tabela
  empresasFiltradas: Empresa[] = [...this.listaEmpresas];
  
  // Variável para controlar o status selecionado
  statusSelecionado: string = 'todos';

  // Função que executa o filtro por status na tabela
  filtrarPorStatus(status: string) {
    this.statusSelecionado = status;

    if (status === 'todos') {
      this.empresasFiltradas = [...this.listaEmpresas];
    } else {
      this.empresasFiltradas = this.listaEmpresas.filter(
        empresa => empresa.status.toLowerCase() === status.toLowerCase()
      );
    }
  }
}