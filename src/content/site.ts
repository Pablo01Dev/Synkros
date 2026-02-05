export const site = {
  company: {
    name: 'Dlap Automação',
    slogan: 'Tecnologia prática para espaços inteligentes',
    description: 'Projetamos e implementamos soluções de automação, redes e infraestrutura tecnológica para empresas e residências.'
  },
  contacts: {
    whatsappNumber: '+5511999999999',
    whatsappLink: 'https://wa.me/5511999999999',
    email: 'contato@dlap.com.br',
    phone: '+55 (11) 4000-0000'
  },
  services: [
    {
      slug: 'automação-residencial-comercial',
      title: 'Automação Residencial e Comercial',
      shortDescription: 'Transformamos seu espaço em um imóvel inteligente. Mais economia e conforto no controle da sua casa ou negócio.',
      icon: 'SmartHome',
      longDescription: 'Soluções de automação para iluminação, climatização, segurança e entretenimento integradas via app.',
      bullets: ['Cenas e rotinas', 'Integração por voz', 'Instalação e configuração']
    },
    {
      slug: 'segurança-eletrônica',
      title: 'Segurança Eletrônica',
      shortDescription: 'Segurança de Alto Nível: Não instalamos apenas câmeras e alarmes, instalamos um Ecossistema Inteligente.',
      icon: 'Shield',
      longDescription: 'Projeto elétrico e instalação de carregadores residenciais e corporativos com monitoramento.',
      bullets: ['Dimensionamento elétrico', 'Monitoramento', 'Suporte pós-instalação']
    },
    {
      slug: 'som-inteligente',
      title: 'Som Inteligente',
      shortDescription: 'Desenvolvemos uma atmosfera sonora ideal com sistemas perfeitamente integrados à sua casa ou negócio inteligente.',
      icon: 'Tool',
      longDescription: 'Análise de infraestrutura, recomendações e planejamento para transformação digital.',
      bullets: ['Auditoria de redes', 'Planejamento de upgrades', 'Relatório executivo']
    },
    {
      slug: 'redes-wifi',
      title: 'Redes & Wi‑Fi',
      shortDescription: 'Projetos e instalação de redes corporativas.',
      icon: 'Wifi',
      longDescription: 'Projetos de rede cabeada e sem fio com foco em cobertura, segurança e desempenho.',
      bullets: ['Site survey', 'Segurança', 'Gerenciamento']
    },
    {
      slug: 'controle-acesso',
      title: 'Controle de Acesso',
      shortDescription: 'Soluções de acesso para ambientes corporativos.',
      icon: 'Lock',
      longDescription: 'Sistemas de controle para portarias, salas seguras e áreas restritas.',
      bullets: ['Biometria', 'Cartões', 'Integração com ERP']
    },
    {
      slug: 'nobreaks',
      title: 'Nobreaks',
      shortDescription: 'CFTV, sensores e monitoramento.',
      icon: 'Shield',
      longDescription: 'Instalamos Nobreaks capazes de manter todos seus sistemas funcionado por horas em caso de queda elétrica.',
      bullets: ['CFTV', 'Integração de alarmes', 'Monitoramento 24/7']
    }
  ],
  portfolio: [
    {
      slug: 'escritorio-conectado',
      title: 'Escritório Conectado',
      subtitle: 'Transformação digital de escritório regional',
      summary: 'Projeto de redes e automação para filial regional com 120 pontos de rede.',
      tags: ['redes', 'automação', 'cftv'],
      images: ['/public/placeholders/portfolio-1.jpg'],
      challenge: 'Infraestrutura antiga e cobertura Wi‑Fi insuficiente.',
      solution: 'Substituição de switches, novo cabeamento e implantação de APs de alta densidade.',
      result: 'Latência reduzida, cobertura completa e monitoramento central.'
    }
  ]
}

export type Service = (typeof site)['services'][number]
