import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenu } from '../../components/menu-lateral/menu-lateral';

@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [CommonModule, SideMenu],
  templateUrl: './documentos.html',
  styleUrl: './documentos.css'
})
export class Documentos {
  termoBusca = '';
  statusSelecionado = '';
  empresaSelecionada = '';

  listaDocumentos = [
    {
      titulo: 'NR10 – Segurança em Instalações e Serviços em Eletricidade',
      tamanho: '2.4 MB • Individual',
      vinculado: 'João da Silva',
      empresa: 'Serviços Alpha Ltda.',
      tipo: 'NR10',
      formato: 'PDF',
      enviadoEm: '20/05/2025',
      vencimento: '28/05/2026',
      status: 'Em análise',
      classeStatus: 'analise'
    },
    {
      titulo: 'CPF – Cadastro de Pessoa Física',
      tamanho: '1.1 MB • Individual',
      vinculado: 'João da Silva',
      empresa: 'Serviços Alpha Ltda.',
      tipo: 'CPF',
      formato: 'PDF',
      enviadoEm: '20/05/2025',
      vencimento: 'Indeterminado',
      status: 'Devolvido',
      classeStatus: 'devolvido'
    },
    {
      titulo: 'ASO – Atestado de Saúde Ocupacional Periódico',
      tamanho: '1.8 MB • Individual',
      vinculado: 'João da Silva',
      empresa: 'Serviços Alpha Ltda.',
      tipo: 'ASO',
      formato: 'PDF',
      enviadoEm: '17/05/2025',
      vencimento: '30/05/2026',
      status: 'Aprovado',
      classeStatus: 'aprovado'
    },
    {
      titulo: 'Folha de Ponto – Mês Anterior',
      tamanho: '890 KB • Individual',
      vinculado: 'João da Silva',
      empresa: 'Serviços Alpha Ltda.',
      tipo: 'Folha de ponto',
      formato: 'PDF',
      enviadoEm: '10/05/2025',
      vencimento: '25/05/2025',
      status: 'Pendente',
      classeStatus: 'pendente'
    },
    {
      titulo: 'ASO Admissional – Maria Souza',
      tamanho: '1.5 MB • Individual',
      vinculado: 'Maria Souza',
      empresa: 'Serviços Alpha Ltda.',
      tipo: 'ASO',
      formato: 'PDF',
      enviadoEm: '21/05/2025',
      vencimento: '30/05/2025',
      status: 'Pendente',
      classeStatus: 'pendente'
    },
    {
      titulo: 'PGR – Programa de Gerenciamento de Riscos Empresarial',
      tamanho: '6.4 MB • Institucional',
      vinculado: 'Serviços Alpha Ltda.',
      empresa: 'Contrato Empresa',
      tipo: 'PGR',
      formato: 'PDF',
      enviadoEm: '12/04/2025',
      vencimento: '12/04/2026',
      status: 'Aprovado',
      classeStatus: 'aprovado'
    }
  ];

  get documentosFiltrados() {
    return this.listaDocumentos.filter(doc => {
      const matchBusca = 
        doc.titulo.toLowerCase().includes(this.termoBusca.toLowerCase()) ||
        doc.vinculado.toLowerCase().includes(this.termoBusca.toLowerCase()) ||
        doc.empresa.toLowerCase().includes(this.termoBusca.toLowerCase());

      const matchStatus = this.statusSelecionado === '' || doc.status === this.statusSelecionado;
      const matchEmpresa = this.empresaSelecionada === '' || doc.empresa === this.empresaSelecionada;

      return matchBusca && matchStatus && matchEmpresa;
    });
  }

  atualizarBusca(event: any) {
    this.termoBusca = event.target.value;
  }

  atualizarStatus(event: any) {
    this.statusSelecionado = event.target.value;
  }

  atualizarEmpresa(event: any) {
    this.empresaSelecionada = event.target.value;
  }
}