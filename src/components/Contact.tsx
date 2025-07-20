import { Phone, MessageSquare, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(31) 99910-9785',
      href: 'tel:+5531999109785',
      description: 'Ligue agora para falar conosco',
      color: 'bg-primary',
      action: 'Ligar Agora'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: 'Chat Online',
      href: 'https://api.whatsapp.com/send?phone=5531999109785&text=Olá!%20Cheguei%20até%20aqui%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços.%20Poderiam%20me%20ajudar?',
      description: 'Converse conosco pelo WhatsApp',
      color: 'bg-green-600',
      action: 'Abrir WhatsApp'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'alyssonconstrucoescivil@hotmail.com',
      href: 'mailto:alyssonconstrucoescivil@hotmail.com',
      description: 'Envie sua dúvida por e-mail',
      color: 'bg-accent',
      action: 'Enviar E-mail'
    }
  ];

  const benefits = [
    'Orçamento 100% gratuito',
    'Resposta em até 24 horas',
    'Visita técnica sem compromisso',
    'Profissionais qualificados',
    'Atendimento personalizado',
    'Garantia de qualidade'
  ];

  const serviceAreas = [
    'Belo Horizonte',
    'Contagem',
    'Betim', 
    'Nova Lima',
    'Ribeirão das Neves',
    'Santa Luzia',
    'Vespasiano',
    'Sabará',
    'Região Metropolitana'
  ];

  return (
    <section id="contact" className="section-padding cta-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
            Solicite um <span className="text-accent">Orçamento</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Transforme seu projeto em realidade. Entre em contato conosco e 
            receba um orçamento personalizado e gratuito.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center space-y-4 hover:bg-white/15 transition-colors group">
                <div className={`${method.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-semibold text-white">
                    {method.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {method.description}
                  </p>
                  <p className="text-white font-medium">
                    {method.value}
                  </p>
                </div>

                <Button
                  asChild
                  className="btn-accent w-full group-hover:scale-105 transition-transform"
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Info Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Benefits */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 space-y-6">
            <h3 className="text-2xl font-display font-semibold text-white">
              Por que escolher a Alysson?
            </h3>
            
            <div className="grid gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/20 pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-accent" size={20} />
                <span className="text-white font-medium">Horário de Atendimento</span>
              </div>
              <div className="space-y-1 text-white/80">
                <p>Segunda a Sexta: 08:00 às 18:00</p>
                <p>Sábado: 08:00 às 12:00</p>
                <p className="text-accent">Emergências: 24 horas</p>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-accent" size={24} />
              <h3 className="text-2xl font-display font-semibold text-white">
                Regiões Atendidas
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-white/20 rounded-lg p-3 text-center text-white/90 hover:bg-white/20 transition-colors"
                >
                  {area}
                </div>
              ))}
            </div>

            <div className="border-t border-white/20 pt-6 space-y-4">
              <h4 className="text-lg font-semibold text-white">
                Solicite uma Visita Técnica
              </h4>
              <p className="text-white/80 text-sm">
                Realizamos visitas técnicas gratuitas para avaliar seu projeto 
                e oferecer as melhores soluções para suas necessidades.
              </p>
              <Button asChild className="btn-primary w-full">
                <a href="https://api.whatsapp.com/send?phone=5531999109785&text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20técnica%20gratuita.%20Poderiam%20me%20ajudar?">
                  Agendar Visita Técnica
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 space-y-6">
          <div className="space-y-4">
            <h3 className="text-3xl font-display font-bold text-white">
              Pronto para Começar seu Projeto?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Nossa equipe está ansiosa para transformar seus sonhos em realidade. 
              Entre em contato hoje mesmo e dê o primeiro passo para o projeto dos seus sonhos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button asChild className="btn-accent flex-1">
              <a href="https://api.whatsapp.com/send?phone=5531999109785&text=Olá!%20Quero%20começar%20meu%20projeto%20hoje%20mesmo!">
                Começar Agora
              </a>
            </Button>
            <Button asChild className="btn-outline border-white text-white hover:bg-white hover:text-primary flex-1">
              <a href="tel:+5531999109785">
                Ligar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;