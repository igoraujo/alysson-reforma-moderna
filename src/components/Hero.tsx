import { Phone, MessageSquare, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-construction.jpg';

const Hero = () => {
  const benefits = [
    'Profissionais qualificados',
    'Orçamento sem compromisso',
    'Garantia de qualidade',
    'Acompanhamento completo'
  ];

  const contactActions = [
    {
      icon: Phone,
      label: 'Telefone',
      href: 'tel:+5531999109785',
      text: '(31) 99910-9785',
      variant: 'btn-primary' as const
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      href: 'https://api.whatsapp.com/send?phone=5531999109785&text=Olá!%20Cheguei%20até%20aqui%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços.%20Poderiam%20me%20ajudar?',
      text: 'WhatsApp',
      variant: 'btn-accent' as const
    },
    {
      icon: Mail,
      label: 'E-mail',
      href: 'mailto:alyssonconstrucoescivil@hotmail.com',
      text: 'E-mail',
      variant: 'btn-outline' as const
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Alysson Construção Civil - Obras e Reformas em BH"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="block">Alysson</span>
                <span className="block text-accent">Construção Civil</span>
              </h1>
              
              <div className="space-y-2 text-lg md:text-xl text-white/90">
                <p>Obras e reformas em BH e região</p>
                <p>Construção, reforma e acabamento</p>
                <p>Projetos arquitetônicos completos</p>
                <p>Design de interiores</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Text */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-display font-semibold">
                Solicite um Orçamento
              </h2>
              <p className="text-white/80">
                Transforme seu projeto em realidade com nossa equipe especializada
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {contactActions.slice(0, 2).map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={index}
                      asChild
                      className={`${action.variant} group justify-start text-left h-auto py-4 px-6`}
                    >
                      <a href={action.href} aria-label={action.label}>
                        <Icon className="mr-3 flex-shrink-0" size={20} />
                        <div>
                          <div className="font-medium">{action.label}</div>
                          <div className="text-sm opacity-90">{action.text}</div>
                        </div>
                        <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                      </a>
                    </Button>
                  );
                })}
              </div>
              
              <Button
                asChild
                className={`${contactActions[2].variant} w-full group justify-center h-auto py-4 px-6`}
              >
                <a href={contactActions[2].href} aria-label={contactActions[2].label}>
                  <Mail className="mr-3" size={20} />
                  <span>{contactActions[2].text}</span>
                  <ArrowRight className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                </a>
              </Button>
            </div>
          </div>

          {/* Stats/Info Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-display font-semibold text-white">
                Por que escolher a Alysson?
              </h3>
              
              <div className="space-y-4">
                <div className="text-white/90">
                  <div className="text-3xl font-bold text-accent">+500</div>
                  <div>Projetos concluídos</div>
                </div>
                
                <div className="text-white/90">
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div>Anos de experiência</div>
                </div>
                
                <div className="text-white/90">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div>Clientes satisfeitos</div>
                </div>
              </div>
              
              <div className="border-t border-white/20 pt-6">
                <p className="text-white/80 italic">
                  "Transformamos sonhos em realidade com qualidade, 
                  agilidade e profissionalismo."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;