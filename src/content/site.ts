export const site = {
  company: {
    name: 'Dlap Automação',
    slogan: 'Tecnologia para espaços inteligentes',
    description: 'Projetamos soluções de automação, redes e infraestrutura tecnológica para residências e empresas.'
  },
  contacts: {
    whatsappNumber: '+5521980882081',
    whatsappLink: 'https://wa.me/5521980882081',
    email: 'synkros.comercial@gmail.com',
    phone: '(21) 98088-2081'
  },
  services: [
    {
      slug: 'automacao',
      title: 'Automação',
      shortDescription: 'Transforme seu imóvel em um ambiente inteligente com mais conforto, economia e controle total.',
      icon: 'SmartHome',
      longDescription: 'Integração de iluminação, clima e lazer gerenciados via aplicativo ou comando de voz.',
      bullets: ['Cenas personalizadas', 'Controle por voz', 'Configuração profissional']
    },
    {
      slug: 'seguranca-eletronica',
      title: 'Segurança Eletrônica',
      shortDescription: 'Proteção avançada com ecossistemas inteligentes de monitoramento em tempo real.',
      icon: 'Shield',
      longDescription: 'Sistemas de CFTV IP e alarmes integrados para segurança total do seu patrimônio.',
      bullets: ['Monitoramento remoto', 'Alertas inteligentes', 'Suporte técnico']
    },
    {
      slug: 'audio-e-video',
      title: 'Som e Vídeo',
      shortDescription: 'Sistemas de áudio e vídeo de alta fidelidade integrados ao seu estilo de vida.',
      icon: 'Music',
      longDescription: 'Projetos de sonorização ambiente e Home Theater com distribuição de sinal em ultra HD.',
      bullets: ['Áudio multiroom', 'Salas de cinema', 'Calibração acústica']
    },
    {
      slug: 'redes-wifi',
      title: 'Redes & Wi‑Fi',
      shortDescription: 'Conectividade robusta e sem interrupções para suportar todos os seus dispositivos.',
      icon: 'Wifi',
      longDescription: 'Projetos de rede cabeada e Wi-Fi Mesh focados em cobertura total e segurança.',
      bullets: ['Site Survey', 'Segurança de dados', 'Alta performance']
    },
    {
      slug: 'controle-acesso',
      title: 'Controle de Acesso',
      shortDescription: 'Gestão inteligente de entrada e saída para empresas e condomínios.',
      icon: 'Lock',
      longDescription: 'Sistemas modernos para portarias e áreas restritas com registros detalhados.',
      bullets: ['Biometria facial', 'Tags e QR Codes', 'Relatórios de acesso']
    },
    {
      slug: 'nobreaks',
      title: 'Energia e Nobreaks',
      shortDescription: 'Proteja seus equipamentos e garanta operação contínua mesmo em quedas de energia.',
      icon: 'Battery',
      longDescription: 'Dimensionamento de sistemas UPS para manter automação e servidores sempre ativos.',
      bullets: ['Proteção de carga', 'Autonomia por horas', 'Manutenção preventiva']
    }
  ],
  portfolio: [
    {
      slug: 'escritorio-conectado',
      title: 'Escritório Conectado',
      subtitle: 'Transformação digital corporativa',
      summary: 'Projeto de redes e automação para sede com 120 pontos de conexão.',
      tags: ['redes', 'automação', 'cftv'],
      images: ['/public/placeholders/portfolio-1.jpg'],
      challenge: 'Instabilidade de sinal e infraestrutura obsoleta.',
      solution: 'Novo cabeamento Cat6 e implantação de Wi-Fi de alta densidade.',
      result: 'Conexão estável, sem pontos cegos e gestão centralizada.'
    }
  ]
}

export type Service = (typeof site)['services'][number]