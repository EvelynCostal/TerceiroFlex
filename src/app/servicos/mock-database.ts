import { Colaborador, Documento, Empresa } from '../modelo/interfaces';

export const LISTA_EMPRESAS: Empresa[] = [
  {
    id: 1,
    nome: 'Serviços Alpha Ltda.',
    cnpj: '12.345.678/0001-90',
    servico: 'Instalações Elétricas e Manutenção',
    responsavelNome: 'João Oliveira',
    responsavelEmail: 'joao.oliveira@servicosalpha.com.br',
    colaboradoresAlocados: 42,
    docPendentes: 12,
    conformidade: 96,
    status: 'Ativa'
  },
  {
    id: 2,
    nome: 'Construtora Horizonte',
    cnpj: '23.456.789/0001-12',
    servico: 'Engenharia Civil e Obras',
    responsavelNome: 'Eduardo Guimarães',
    responsavelEmail: 'eduardo@horizonteeng.com.br',
    colaboradoresAlocados: 88,
    docPendentes: 24,
    conformidade: 92,
    status: 'Ativa'
  },
  {
    id: 3,
    nome: 'Manutenção Prime',
    cnpj: '34.567.890/0001-34',
    servico: 'Climatização e HVAC',
    responsavelNome: 'Marcos Vinicius',
    responsavelEmail: 'marcos@manutencaoprime.com.br',
    colaboradoresAlocados: 31,
    docPendentes: 6,
    conformidade: 98,
    status: 'Ativa'
  },
  {
    id: 4,
    nome: 'TechSupport Serviços',
    cnpj: '45.678.901/0001-56',
    servico: 'Cabeamento e Infraestrutura de TI',
    responsavelNome: 'Fernanda Lins',
    responsavelEmail: 'fernanda@techsupport.net.br',
    colaboradoresAlocados: 19,
    docPendentes: 3,
    conformidade: 99,
    status: 'Ativa'
  },
  {
    id: 5,
    nome: 'Grupo NovaBase',
    cnpj: '56.789.012/0001-78',
    servico: 'Segurança Patrimonial e Vigilância',
    responsavelNome: 'Cláudio Ramos',
    responsavelEmail: 'contato@novabasebr.com',
    colaboradoresAlocados: 68,
    docPendentes: 38,
    conformidade: 84,
    status: 'Em Análise'
  }
];

export const LISTA_COLABORADORES: Colaborador[] = [
  {
    id: 1,
    nome: 'João da Silva',
    cargo: 'Eletricista de Alta Tensão',
    cpf: '123.456.789-10',
    empresa: 'Serviços Alpha Ltda.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    status: 'Ativo',
    aprovados: 4,
    pendentes: 1,
    devolvidos: 1
  },
  {
    id: 2,
    nome: 'Maria Souza',
    cargo: 'Técnica em Segurança do Trabalho',
    cpf: '234.567.890-21',
    empresa: 'Serviços Alpha Ltda.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces',
    status: 'Ativo',
    aprovados: 6,
    pendentes: 1,
    devolvidos: 0
  },
  {
    id: 3,
    nome: 'Pedro Santos',
    cargo: 'Encarregado de Obras',
    cpf: '345.678.901-32',
    empresa: 'Construtora Horizonte',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
    status: 'Ativo',
    aprovados: 7,
    pendentes: 1,
    devolvidos: 0
  },
  {
    id: 4,
    nome: 'Ana Oliveira',
    cargo: 'Engenheira Mecânica',
    cpf: '456.789.012-43',
    empresa: 'Manutenção Prime',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    status: 'Ativo',
    aprovados: 6,
    pendentes: 0,
    devolvidos: 0
  },
  {
    id: 5,
    nome: 'Lucas Ferreira',
    cargo: 'Instalador de Redes e Telecom',
    cpf: '567.890.123-54',
    empresa: 'TechSupport Serviços',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces',
    status: 'Ativo',
    aprovados: 4,
    pendentes: 1,
    devolvidos: 0
  }
];

export const LISTA_DOCUMENTOS: Documento[] = [
  {
    id: 1,
    titulo: 'NR10 – Segurança em Instalações e Serviços em Eletricidade',
    tamanho: '2.4 MB • Individual',
    tipoVinculo: 'Individual',
    vinculadoA: 'João da Silva',
    empresa: 'Serviços Alpha Ltda.',
    tipo: 'NR10',
    formato: 'PDF',
    enviadoEm: '20/05/2025',
    vencimento: '28/05/2026',
    status: 'Em análise',
    classeStatus: 'analise'
  },
  {
    id: 2,
    titulo: 'CPF – Cadastro de Pessoa Física',
    tamanho: '1.1 MB • Individual',
    tipoVinculo: 'Individual',
    vinculadoA: 'João da Silva',
    empresa: 'Serviços Alpha Ltda.',
    tipo: 'CPF',
    formato: 'PDF',
    enviadoEm: '20/05/2025',
    vencimento: 'Indeterminado',
    status: 'Devolvido',
    classeStatus: 'devolvido'
  },
  {
    id: 3,
    titulo: 'ASO – Atestado de Saúde Ocupacional Periódico',
    tamanho: '1.8 MB • Individual',
    tipoVinculo: 'Individual',
    vinculadoA: 'João da Silva',
    empresa: 'Serviços Alpha Ltda.',
    tipo: 'ASO',
    formato: 'PDF',
    enviadoEm: '17/05/2025',
    vencimento: '30/05/2026',
    status: 'Aprovado',
    classeStatus: 'aprovado'
  },
  {
    id: 4,
    titulo: 'Folha de Ponto – Mês Anterior',
    tamanho: '890 KB • Individual',
    tipoVinculo: 'Individual',
    vinculadoA: 'João da Silva',
    empresa: 'Serviços Alpha Ltda.',
    tipo: 'Folha de ponto',
    formato: 'PDF',
    enviadoEm: '10/05/2025',
    vencimento: '25/05/2025',
    status: 'Pendente',
    classeStatus: 'pendente'
  },
  {
    id: 5,
    titulo: 'ASO Admissional – Maria Souza',
    tamanho: '1.5 MB • Individual',
    tipoVinculo: 'Individual',
    vinculadoA: 'Maria Souza',
    empresa: 'Serviços Alpha Ltda.',
    tipo: 'ASO',
    formato: 'PDF',
    enviadoEm: '21/05/2025',
    vencimento: '30/05/2025',
    status: 'Pendente',
    classeStatus: 'pendente'
  },
  {
    id: 6,
    titulo: 'PGR – Programa de Gerenciamento de Riscos Empresarial',
    tamanho: '6.4 MB • Institucional',
    tipoVinculo: 'Institucional',
    vinculadoA: 'Serviços Alpha Ltda.',
    empresa: 'Contrato Empresa',
    tipo: 'PGR',
    formato: 'PDF',
    enviadoEm: '12/04/2025',
    vencimento: '12/04/2026',
    status: 'Aprovado',
    classeStatus: 'aprovado'
  }
];