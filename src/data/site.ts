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

// Faixa logo abaixo do hero: tipos de projeto que você já liderou.
// "cases" usa o nome do arquivo em src/content/cases (sem .md).
export const tiposProjeto = [
  {
    titulo: 'Operações em escala nacional',
    texto: 'Redes físicas e digitais com centenas de pontos operando ao mesmo tempo.',
    cases: [
      { slug: 'copa-de-todos', nome: 'Copa de TODOS' },
      { slug: 'franquia-digital', nome: 'Franquia Digital' },
    ],
  },
  {
    titulo: 'Parcerias B2B2C e novos canais',
    texto: 'Acordos entre empresas em que todas as pontas precisam ganhar.',
    cases: [
      { slug: 'tim-cross-sell', nome: 'TIM × Cartão de TODOS' },
      { slug: 'lett-2buy', nome: '2Buy' },
    ],
  },
  {
    titulo: 'Produtos com IA conversacional',
    texto: 'Jornadas de compra e cadastro no WhatsApp com IA generativa e OCR.',
    cases: [
      { slug: 'nespresso-whatsapp', nome: 'Nespresso' },
      { slug: 'nestle-ocr-bbb', nome: 'Nestlé Faz BBBem' },
    ],
  },
  {
    titulo: 'Plataformas, integrações e pagamentos',
    texto: 'ERP global, recorrência, KYC e arquitetura orientada a eventos.',
    cases: [
      { slug: 'ctn-global-erp', nome: 'CTN Global' },
      { slug: 'kyc-automacao', nome: 'KYC' },
    ],
  },
  {
    titulo: 'Novos negócios e go-to-market',
    texto: 'Do solution fit ao lançamento, com receita recorrente medida.',
    cases: [
      { slug: 'polyblog-pmf', nome: 'Polyblog' },
      { slug: 'lett-professional-services', nome: 'Professional Services' },
    ],
  },
  {
    titulo: 'Governança de portfólio e PMO',
    texto: 'Priorização, playbooks e rituais para o time inteiro decidir melhor.',
    cases: [
      { slug: 'framework-priorizacao', nome: 'Framework de priorização' },
      { slug: 'playbook-novos-projetos', nome: 'Playbook' },
    ],
  },
];

// Seção "Competências": as habilidades que as vagas de PM mais pedem,
// cada uma com um resultado seu como prova. "keywords" são os termos
// usados nas vagas (deixe em inglês quando é assim que aparecem).
export const competencias = [
  {
    titulo: 'Estratégia de produto e roadmap',
    keywords: ['Product Strategy', 'Roadmap', 'OKRs', 'Business Case'],
    texto: 'Ligo objetivo de negócio a roadmap, hipótese e indicador de sucesso.',
    prova: { valor: '~40%', rotulo: 'menos custo no novo modelo de franquia', href: '/cases/franquia-digital' },
  },
  {
    titulo: 'Priorização e execução ágil',
    keywords: ['RICE', 'MoSCoW', 'Backlog', 'Scrum', 'FDD'],
    texto: 'Decido o que entra, o que espera e o que sai, e mantenho o time entregando.',
    prova: { valor: '0 a 4', rotulo: 'níveis de prioridade que governam o portfólio', href: '/cases/framework-priorizacao' },
  },
  {
    titulo: 'Discovery e validação',
    keywords: ['User Research', 'Product Discovery', 'PMF', 'MVP', 'TAM/SAM/SOM'],
    texto: 'Entrevistas, dados de uso e testes de preço antes de investir em escala.',
    prova: { valor: '+30%', rotulo: 'na base de clientes 40 dias após o lançamento', href: '/cases/polyblog-pmf' },
  },
  {
    titulo: 'Métricas e analytics',
    keywords: ['KPIs', 'Funil AARRR', 'Conversão', 'Churn', 'Power BI', 'Amplitude'],
    texto: 'Todo projeto nasce com indicador e dashboard alimentado por eventos.',
    prova: { valor: '22,1% → 4,8%', rotulo: 'de retentativas e duplicidades no KYC', href: '/cases/kyc-automacao' },
  },
  {
    titulo: 'IA aplicada a produto',
    keywords: ['IA generativa', 'Chatbots / LLM', 'OCR', 'AI use cases'],
    texto: 'Escolho onde a IA gera valor de verdade e coordeno dados, IA, UX e engenharia.',
    prova: { valor: '+1 mi', rotulo: 'cápsulas vendidas numa jornada com IA no WhatsApp', href: '/cases/nespresso-whatsapp' },
  },
  {
    titulo: 'Fluência técnica',
    keywords: ['APIs', 'Webhooks', 'Event-driven', 'AWS Serverless', 'Pagamentos'],
    texto: 'Converso de igual pra igual com engenharia sobre integração e arquitetura.',
    prova: { valor: '99%', rotulo: 'de sucesso na integração TIM durante a expansão', href: '/cases/tim-cross-sell' },
  },
  {
    titulo: 'Stakeholders e liderança',
    keywords: ['Stakeholder Management', 'Executive Communication', 'Cross-functional', 'People Management'],
    texto: 'Alinho da operação à presidência e lidero gente direta e indiretamente.',
    prova: { valor: '420+', rotulo: 'franquias alinhadas numa operação nacional', href: '/cases/copa-de-todos' },
  },
  {
    titulo: 'Go-to-market e negócio',
    keywords: ['Go-to-Market', 'Business Plan', 'P&L', 'B2B2C', 'Monetização'],
    texto: 'Penso em receita, margem e modelo de negócio, não só em funcionalidade.',
    prova: { valor: 'R$ 100 mil+', rotulo: 'de MRR em 7 meses numa área criada do zero', href: '/cases/lett-professional-services' },
  },
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
