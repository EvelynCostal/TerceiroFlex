import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { SideMenu } from '../../components/menu-lateral/menu-lateral';
import { LISTA_COLABORADORES, LISTA_DOCUMENTOS } from '../../servicos/mock-database';
import { Colaborador, Documento } from '../../modelo/interfaces';

@Component({
  selector: 'app-enviar-documento',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SideMenu],
  templateUrl: './enviar-documento.html',
  styleUrl: './enviar-documento.css'
})
export class EnviarDocumento implements OnInit {
  arquivoSelecionado: File | null = null;
  tipoDocumento: string = '';
  colaboradorIdSelecionado: number | null = null; // Armazena o ID selecionado
  dataVencimento: string = '';
  observacoes: string = '';

  // Lista que vai alimentar o select no HTML
  colaboradores: Colaborador[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Carrega os colaboradores do mock ao iniciar a página
    this.colaboradores = LISTA_COLABORADORES;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.arquivoSelecionado = file;
    }
  }

  removerArquivo() {
    this.arquivoSelecionado = null;
  }

  enviarDocumento() {
    if (this.arquivoSelecionado && this.tipoDocumento && this.colaboradorIdSelecionado) {
      const colabEncontrado = this.colaboradores.find(c => c.id === Number(this.colaboradorIdSelecionado));
      const nomeColaborador = colabEncontrado ? colabEncontrado.nome : 'Colaborador';

      const novoDocumento: Documento = {
        id: LISTA_DOCUMENTOS.length + 1,
        titulo: this.tipoDocumento,
        tamanho: `${(this.arquivoSelecionado.size / 1024).toFixed(1)} KB`,
        tipoVinculo: 'Individual',
        vinculadoA: nomeColaborador,
        empresa: 'Serviços Alpha Ltda.',
        tipo: this.tipoDocumento,
        formato: 'PDF',
        enviadoEm: new Date().toLocaleDateString('pt-BR'),
        vencimento: this.dataVencimento ? new Date(this.dataVencimento).toLocaleDateString('pt-BR') : '26/09/2027',
        status: 'Pendente',
        classeStatus: 'pendente'
      };

      LISTA_DOCUMENTOS.push(novoDocumento);
      alert(`Documento enviado com sucesso para ${nomeColaborador}!`);
      this.router.navigate(['/colaborador/:id']);
    }
  }
}