import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { SideMenu } from '../../components/menu-lateral/menu-lateral';
import { LISTA_COLABORADORES, LISTA_DOCUMENTOS } from '../../servicos/mock-database';
import { Colaborador, Documento } from '../../modelo/interfaces';

@Component({
  selector: 'app-detalhes-colaborador',
  imports: [CommonModule, SideMenu, RouterLink],
  templateUrl: './detalhes-colaborador.html',
  styleUrl: './detalhes-colaborador.css',
})
export class DetalhesColaborador implements OnInit {
  colaborador?: Colaborador;
  documentosColaborador: Documento[] = [];
  abaAtiva = 'documentos';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : 1; // Padrão para 1 (João da Silva) se não vier ID

    this.colaborador = LISTA_COLABORADORES.find(c => c.id === id) || LISTA_COLABORADORES[0];
    
    // Filtra os documentos associados a este colaborador
    this.documentosColaborador = LISTA_DOCUMENTOS.filter(d => d.vinculadoA === this.colaborador?.nome);
  }

  mudarAba(aba: string) {
    this.abaAtiva = aba;
  }
}
