import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SideMenu } from '../../components/menu-lateral/menu-lateral';
import { LISTA_EMPRESAS, LISTA_DOCUMENTOS, LISTA_COLABORADORES } from '../../servicos/mock-database';
import { Empresa, Documento, Colaborador } from '../../modelo/interfaces';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule, SideMenu, RouterLink],
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.css'
})
export class Relatorios implements OnInit {
  empresas: Empresa[] = LISTA_EMPRESAS;
  documentos: Documento[] = LISTA_DOCUMENTOS;
  colaboradores: Colaborador[] = LISTA_COLABORADORES;

  // Métricas dinâmicas
  totalDocumentosAnalisados: number = 0;
  totalPendentes: number = 0;
  totalDevolvidos: number = 0;
  totalAprovados: number = 0;
  totalEmAnalise: number = 0;
  conformidadeGeral: number = 0;

  ngOnInit(): void {
    this.calcularMetricas();
  }

  calcularMetricas(): void {
    // Total geral de documentos no mock
    this.totalDocumentosAnalisados = this.documentos.length;

    // Contagem por status direto do mock
    this.totalAprovados = this.documentos.filter(d => d.status === 'Aprovado').length;
    this.totalPendentes = this.documentos.filter(d => d.status === 'Pendente').length;
    this.totalDevolvidos = this.documentos.filter(d => d.status === 'Devolvido').length;
    this.totalEmAnalise = this.documentos.filter(d => d.status === 'Em análise').length;

    // Média de conformidade geral com base na LISTA_EMPRESAS
    if (this.empresas.length > 0) {
      const somaConformidade = this.empresas.reduce((acc, curr) => acc + curr.conformidade, 0);
      this.conformidadeGeral = Math.round(somaConformidade / this.empresas.length);
    }
  }
}