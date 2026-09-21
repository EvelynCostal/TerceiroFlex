import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SideMenu } from '../../components/menu-lateral/menu-lateral';
import { LISTA_EMPRESAS, LISTA_DOCUMENTOS, LISTA_COLABORADORES } from '../../servicos/mock-database';
import { Empresa, Documento } from '../../modelo/interfaces';

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

  totalDocumentosAnalisados = 1248; // Base estática simulada do lote
  totalPendentes = 0;
  totalDevolvidos = 0;
  conformidadeGeral = 97;

  ngOnInit(): void {
    // Calcula dinamicamente com base no mock database se desejar
    this.totalPendentes = this.documentos.filter(d => d.status === 'Pendente').length + 124; // Soma simulada para bater com 128
    this.totalDevolvidos = this.documentos.filter(d => d.status === 'Devolvido').length + 41; // Soma simulada para bater com 42
  }
}