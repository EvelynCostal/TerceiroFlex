export interface Colaborador {
  id: number;
  nome: string;
  cargo: string;
  cpf: string;
  empresa: string;
  avatar: string;
  status: 'Ativo' | 'Inativo' | 'Em Análise';
  aprovados: number;
  pendentes: number;
  devolvidos: number;
}

export interface Documento {
  id: number;
  titulo: string;
  tamanho: string;
  tipoVinculo: 'Individual' | 'Institucional';
  vinculadoA: string;
  empresa: string;
  tipo: string;
  formato: 'PDF' | 'JPG' | 'PNG';
  enviadoEm: string;
  vencimento: string;
  status: 'Aprovado' | 'Pendente' | 'Em análise' | 'Devolvido';
  classeStatus: 'aprovado' | 'pendente' | 'analise' | 'devolvido';
}

export interface Empresa {
  id: number;
  nome: string;
  cnpj: string;
  servico: string;
  responsavelNome: string;
  responsavelEmail: string;
  colaboradoresAlocados: number;
  docPendentes: number;
  conformidade: number;
  status: 'Ativa' | 'Em Análise' | 'Inativa';
}