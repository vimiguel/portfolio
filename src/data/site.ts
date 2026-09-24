// ─────────────────────────────────────────────────────────────
// Textos gerais do site. Edite aqui sem mexer no layout.
// Os cases ficam em src/content/cases/*.md
// ─────────────────────────────────────────────────────────────

export const site = {
  nome: 'Vinícius Miguel',
  cargo: 'Liderança de portfólio de projetos estratégicos',
  descricao:
    'Product & Project Leader. Conecto negócio, produto, tecnologia e operação para transformar demandas estratégicas em iniciativas que avançam.',

  hero: {
    kicker: 'Produto · Projetos · Governança',
    titulo: 'Estratégia que',
    destaque: 'sai do papel.',
    texto:
      'Lidero projetos complexos, com muitas áreas e muita coisa em jogo. Organizo a priorização, deixo a governança leve e trago resultado que dá pra medir, seja numa operação nacional, num produto novo ou numa jornada com IA.',
  },

  // Deixe vazio ('') para esconder o botão correspondente.
  links: {
    agenda: 'https://calendar.app.google/KAyJSSwK4hoX7BVy7',
    whatsapp: 'https://wa.me/5535988129823',
    youtube: 'https://www.youtube.com/@viniciusmiguelyt',
    linkedin: 'https://www.linkedin.com/in/vin%C3%ADcius-miguel-362745182/',
    email: 'contato01viniciusmiguel@gmail.com', // ex.: 'voce@email.com'
  },
};

// Números da faixa de destaque da home
export const numeros = [
  { valor: '+1,9 mi', rotulo: 'pacotes de figurinhas vendidos em 420+ franquias' },
  { valor: '~40%', rotulo: 'menos custo no novo modelo de Franquia Digital' },
  { valor: '+1 mi', rotulo: 'cápsulas Nespresso vendidas pelo WhatsApp' },
  { valor: 'R$ 100 mil+', rotulo: 'de MRR em 7 meses numa área criada do zero' },
];

// Seção "Como eu trabalho"
export const metodo = [
  {
    titulo: 'Priorizar',
    texto:
      'Antes de executar, decido o que entra. RICE quando dá pra calcular, MoSCoW para o que é novo, Esforço × Impacto quando a rota muda.',
  },
  {
    titulo: 'Estruturar',
    texto:
      'TAP, stakeholders, jornadas e rituais definidos no início. Um playbook replicável em vez de depender de quem sabe de cabeça.',
  },
  {
    titulo: 'Integrar',
    texto:
      'Entro no detalhe técnico: webhooks, arquitetura orientada a eventos, APIs de parceiros. É ali que muita parceria emperra.',
  },
  {
    titulo: 'Medir',
    texto:
      'Todo projeto nasce com indicador. BI alimentado por eventos para que a decisão venha dos dados, não da opinião.',
  },
];

// Trajetória (mais recente primeiro)
export const experiencias = [
  {
    empresa: 'TODOS Empreendimentos',
    cargo: 'Liderança de portfólio de projetos estratégicos',
    periodo: '1 ano e 2 meses · atual',
    texto:
      'Gestão direta de um time de 7 pessoas. Projetos de grande porte com reporte à Head e interface com a liderança executiva: TIM, Franquia Digital, Copa de TODOS, KYC.',
  },
  {
    empresa: 'Blip',
    cargo: 'Product Manager Sênior',
    periodo: '8 meses',
    texto:
      'Conta global Nestlé/Nespresso. Jornadas conversacionais com IA no WhatsApp, squads de Dados, UX, IA e Engenharia, governança FDD.',
  },
  {
    empresa: 'TODOS Empreendimentos',
    cargo: 'Product Manager · ERP global',
    periodo: '2 anos e 3 meses',
    texto:
      'ERP global para a expansão internacional: pagamentos, recorrência, arquitetura orientada a eventos em AWS serverless. Liderança de UX/UI e Data Analytics.',
  },
  {
    empresa: 'Waiterio / Polyblog',
    cargo: 'Product Manager',
    periodo: '4 meses',
    texto:
      'Solution fit e lançamento do Polyblog. +30% na base durante o solution fit e mais +30% em 40 dias após o lançamento.',
  },
  {
    empresa: 'Lett',
    cargo: 'Product & Project Manager → Professional Services',
    periodo: '1 ano e 5 meses',
    texto:
      'Go-to-market do 2Buy e, após promoção, criação da área de Professional Services: mais de R$ 100 mil de MRR em 7 meses.',
  },
];

export const ferramentas = [
  'Miro', 'Notion', 'Monday', 'Power BI', 'Amplitude', 'Hotjar',
  'Google Analytics', 'AWS Serverless', 'Webhooks / APIs', 'IA generativa',
];

export const conteudo = {
  titulo: 'Por que projetos travam?',
  texto:
    'No meu canal falo com gestores, PMs, POs e Heads of Engineering sobre o que costuma estar por trás de um projeto travado: ambiguidade, decisões evitadas, responsabilidades mal definidas, conflito entre áreas, governança demais e retrabalho.',
  imagem: '/images/refinamento.jpg',
};
