import { CheckCircle, Award, Clock, Users, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Rapidez na Entrega',
      description: 'Prazo de conclusão otimizado através de planejamento eficiente e equipe qualificada.'
    },
    {
      icon: Award,
      title: 'Mão de Obra Qualificada',
      description: 'Profissionais certificados e experientes garantem execução perfeita do projeto.'
    },
    {
      icon: Target,
      title: 'Acompanhamento Completo',
      description: 'Gerenciamento total da obra, do planejamento ao monitoramento das atividades.'
    },
    {
      icon: Heart,
      title: 'Melhor Custo-Benefício',
      description: 'Planejamento evita desperdícios e garante o melhor investimento do seu dinheiro.'
    }
  ];

  const features = [
    'Arquitetos especializados',
    'Pedreiros experientes', 
    'Bombeiros hidráulicos',
    'Eletricistas certificados',
    'Decoradoras criativas',
    'Gesseiros qualificados',
    'Pintores especializados',
    'Engenheiros competentes'
  ];

  const services = [
    'Manutenção predial',
    'Instalações diversas',
    'Pequenos reparos',
    'Construção de casas',
    'Construção de edifícios',
    'Reformas de grande porte'
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                Obras e Reformas BH | 
                <span className="text-gradient"> Alysson Construção Civil</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Especialistas em construção civil e região metropolitana de Belo Horizonte
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                Se você está pensando em fazer uma reforma na sua casa ou apartamento,
                deve pensar muito bem antes de contratar mão de obra para não ter dor de cabeça.
              </p>
              
              <p className="text-muted-foreground">
                Uma forma de se livrar dessa preocupação é contratar uma empresa especializada 
                na realização de <strong className="text-foreground">obras e reformas residenciais e comerciais</strong>.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  Por que contratar nossa empresa de obras e reformas?
                </h3>
                <p className="text-muted-foreground">
                  A contratação de uma empresa de obras e reformas pode dar mais
                  tranquilidade na hora de reformar. Isso porque nossa empresa oferece tudo de que
                  você precisa para ter a sua reforma concluída.
                </p>
              </div>
            </div>

            {/* Professional Team */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Nossa Equipe Profissional
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={16} />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Nossos Serviços
              </h4>
              <p className="text-muted-foreground">
                Realizamos serviços de manutenção predial, instalações e pequenos reparos, 
                mas também realizamos construção de casas, edifícios e reformas de maior proporção.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-accent flex-shrink-0" size={16} />
                    <span className="text-muted-foreground text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-50 border border-border rounded-xl p-6">
              <p className="text-muted-foreground">
                Na etapa da obra propriamente dita, tudo é realizado de acordo com um planejamento 
                e um cronograma estabelecido, evitando atrasos e transtornos.
              </p>
              <p className="text-muted-foreground mt-3">
                Ao optar por esse tipo de serviço, você não precisará perder tempo correndo atrás 
                da compra de materiais e da contratação de mão de obra avulsa.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                Benefícios de Contratar Nossa Empresa
              </h3>
              <p className="text-muted-foreground">
                Existem diversos benefícios em contratar uma empresa de obra e
                reforma, entenda cada um deles:
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-8 text-center space-y-4">
              <Users className="mx-auto text-primary" size={48} />
              <h4 className="text-xl font-display font-semibold text-foreground">
                Satisfação Garantida
              </h4>
              <p className="text-muted-foreground">
                Nossa prioridade é a satisfação total do cliente. Trabalhamos com 
                transparência, qualidade e compromisso em cada projeto.
              </p>
              <Button asChild className="btn-primary">
                <a href="#contact">Começar Meu Projeto</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;