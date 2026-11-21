import { Component, computed, signal, viewChild } from '@angular/core';
import { Icon } from './ui/icon';
import { BriefDialog } from './ui/brief-dialog';

type Goal = 'presence' | 'operation' | 'data' | 'support';
type Situation = 'beginning' | 'scattered' | 'existing';
interface Solution {
  id: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  icon: string;
  brief: string;
}
@Component({
  selector: 'app-root',
  imports: [Icon, BriefDialog],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { '(document:keydown.escape)': 'menuOpen.set(false)' },
})
export class App {
  readonly menuOpen = signal(false);
  readonly goal = signal<Goal>('operation');
  readonly situation = signal<Situation>('scattered');
  readonly expandedSolution = signal<string | null>(null);
  readonly dialog = viewChild.required(BriefDialog);
  readonly year = new Date().getFullYear();
  readonly goals: { id: Goal; title: string; icon: string }[] = [
    { id: 'presence', title: 'Atrair novos clientes', icon: 'globe' },
    { id: 'operation', title: 'Organizar a operação', icon: 'flow' },
    { id: 'data', title: 'Decidir com dados', icon: 'chart' },
    { id: 'support', title: 'Melhorar o atendimento', icon: 'message' },
  ];
  readonly solutions: Solution[] = [
    {
      id: 'sites',
      title: 'Sites e landing pages',
      icon: 'globe',
      summary: 'Sua proposta de valor, bem apresentada.',
      description:
        'Presença digital pensada para explicar o seu negócio e facilitar o contato. Estrutura, conteúdo e experiência alinhados ao objetivo de cada página.',
      deliverables: [
        'Arquitetura de conteúdo e interface',
        'Desenvolvimento responsivo',
        'Formulários e integrações definidos no escopo',
      ],
      brief: 'Sites e landing pages',
    },
    {
      id: 'software',
      title: 'Software e aplicativos',
      icon: 'layers',
      summary: 'Ferramentas para o seu jeito de trabalhar.',
      description:
        'Sistemas web, aplicativos e portais sob medida para processos que pedem uma solução própria. Do fluxo principal às integrações necessárias.',
      deliverables: [
        'Mapeamento de fluxos e requisitos',
        'Interface e desenvolvimento',
        'Validação por critérios de aceite',
      ],
      brief: 'Software e aplicativos',
    },
    {
      id: 'data',
      title: 'Dados e Business Intelligence',
      icon: 'chart',
      summary: 'Informação organizada para suas decisões.',
      description:
        'Conectamos fontes, estruturamos pipelines e criamos visões de negócio. A definição dos indicadores vem antes do dashboard.',
      deliverables: [
        'Mapeamento de fontes e indicadores',
        'Pipelines e modelagem de dados',
        'Dashboards e documentação',
      ],
      brief: 'Dados e Business Intelligence',
    },
    {
      id: 'ai',
      title: 'IA e chatbots',
      icon: 'message',
      summary: 'Inteligência aplicada a um problema real.',
      description:
        'Assistentes, chatbots e recursos de IA com uma função clara. Avaliamos dados disponíveis, limites de uso e os momentos que precisam de uma pessoa.',
      deliverables: [
        'Definição do caso de uso',
        'Fluxos e fontes de conhecimento',
        'Testes e encaminhamento humano',
      ],
      brief: 'IA e chatbots',
    },
    {
      id: 'automation',
      title: 'Automações e integrações',
      icon: 'flow',
      summary: 'Menos etapas manuais entre ferramentas.',
      description:
        'APIs e automações conectam o que já faz parte da sua rotina. Começamos por um fluxo específico, com regras e exceções bem definidas.',
      deliverables: [
        'Desenho do fluxo e suas exceções',
        'Conexão entre sistemas e APIs',
        'Registros de execução e validação',
      ],
      brief: 'Automações e integrações',
    },
  ];
  readonly recommendation = computed(() => {
    const goal = this.goal();
    const situation = this.situation();
    const solutionId =
      goal === 'presence'
        ? 'sites'
        : goal === 'data'
          ? 'data'
          : goal === 'support'
            ? 'ai'
            : situation === 'beginning'
              ? 'software'
              : 'automation';
    const solution = this.solutions.find((item) => item.id === solutionId)!;
    const context = {
      beginning:
        'O primeiro passo é mapear o fluxo essencial e definir uma entrega inicial com limites claros.',
      scattered:
        'O primeiro passo é identificar onde as informações se perdem e quais ferramentas precisam conversar.',
      existing:
        'O primeiro passo é entender o que funciona hoje e definir a evolução sem perder esse contexto.',
    }[situation];
    const complement =
      goal === 'data'
        ? 'Integrações podem apoiar a atualização das fontes.'
        : goal === 'presence'
          ? 'Uma integração pode conectar novos contatos à sua operação.'
          : goal === 'support'
            ? 'Automações podem conectar o atendimento aos seus sistemas.'
            : 'Dados e BI podem dar visibilidade ao fluxo depois de organizado.';
    return { ...solution, context, complement };
  });
  readonly faqs = [
    {
      question: 'Preciso saber exatamente qual solução contratar?',
      answer:
        'Não. Podemos começar pelo problema: como sua empresa trabalha hoje, o que precisa mudar e quais restrições existem. O seletor desta página ajuda a organizar esse primeiro contexto; a definição final depende de uma conversa e do levantamento de requisitos.',
    },
    {
      question: 'Vocês atendem empresas de qualquer região?',
      answer:
        'O atendimento é remoto para pequenas e médias empresas em todo o Brasil, de diferentes setores. Priorizamos comunicação objetiva por escrito, com reuniões quando forem úteis para decisões e alinhamentos.',
    },
    {
      question: 'Como são definidos prazo e investimento?',
      answer:
        'Depois de entender a demanda, definimos entregas, critérios de aceite, dependências, prazo e investimento na proposta. Não há um preço padrão publicado: cada escopo precisa ser avaliado.',
    },
    {
      question: 'Preciso contratar todas as soluções juntas?',
      answer:
        'Não. Cada projeto pode existir de forma independente. Quando fizer sentido para o negócio, produtos e ferramentas podem se conectar e formar um ecossistema ao longo do tempo.',
    },
    {
      question: 'Como funciona o suporte depois da entrega?',
      answer:
        'Suporte, manutenção, infraestrutura e novas evoluções são definidos na proposta de cada projeto. Esses itens precisam estar claros antes do início, conforme as necessidades da solução.',
    },
  ];
  toggleSolution(id: string) {
    this.expandedSolution.update((current) => (current === id ? null : id));
  }
  setSituation(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'beginning' || value === 'scattered' || value === 'existing')
      this.situation.set(value);
  }
  start(service?: string) {
    this.menuOpen.set(false);
    this.dialog().open(service);
  }
}
