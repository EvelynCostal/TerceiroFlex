import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { SideMenu } from '../../components/menu-lateral/menu-lateral';
import { LISTA_DOCUMENTOS } from '../../servicos/mock-database';
import { Documento } from '../../modelo/interfaces';

@Component({
  selector: 'app-documento-devolvido',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SideMenu],
  templateUrl: './documento-devolvido.html',
  styleUrl: './documento-devolvido.css'
})
export class DocumentoDevolvido implements OnInit {
  documentoAtual: Documento | null = null;
  arquivoNovo: File | null = null;
  observacaoReenvio: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Tenta capturar o ID pela rota ou busca automaticamente o primeiro documento devolvido do mock
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      const encontrada = LISTA_DOCUMENTOS.find(d => d.id === Number(idParam));
      if (encontrada) {
        this.documentoAtual = encontrada;
      }
    } else {
      const devolvidoDoMock = LISTA_DOCUMENTOS.find(d => d.status === 'Devolvido');
      if (devolvidoDoMock) {
        this.documentoAtual = devolvidoDoMock;
      }
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.arquivoNovo = file;
    }
  }

  removerArquivo() {
    this.arquivoNovo = null;
  }

  reenviarDocumento() {
    if (this.arquivoNovo && this.documentoAtual) {
      // Atualiza o objeto diretamente no array do banco falso em memória
      this.documentoAtual.tamanho = `${(this.arquivoNovo.size / 1024).toFixed(1)} KB`;
      this.documentoAtual.enviadoEm = new Date().toLocaleDateString('pt-BR');
      this.documentoAtual.status = 'Em análise';
      this.documentoAtual.classeStatus = 'analise';

      alert(`Documento corrigido e reenviado com sucesso!`);
      this.router.navigate(['/documentos']);
    }
  }

  sair() {
    this.router.navigate(['/login']);
  }
}