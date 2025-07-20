import { ArrowRight, Home, Building, Paintbrush, Wrench, Ruler, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const mainServices = [
    {
      icon: Home,
      title: 'Reforma de Casa',
      description: 'Reformas completas e parciais de residências com qualidade e agilidade.',
      features: ['Planejamento completo', 'Mão de obra qualificada', 'Materiais de qualidade'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop'
    },
    {
      icon: Building,
      title: 'Construção de Casa',
      description: 'Construção de casas do projeto ao acabamento com acompanhamento total.',
      features: ['Projeto arquitetônico', 'Execução completa', 'Acabamento premium'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop'
    },
    {
      icon: Paintbrush,
      title: 'Acabamento Premium',
      description: 'Acabamentos de alta qualidade para valorizar seu imóvel.',
      features: ['Gesso decorativo', 'Pintura especializada', 'Detalhes únicos'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop'
    },
    {
      icon: Wrench,
      title: 'Reforma de Apartamento',
      description: 'Reformas de apartamentos com foco em otimização de espaços.',
      features: ['Design inteligente', 'Aproveitamento máximo', 'Modernização'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop'
    },
    {
      icon: Ruler,
      title: 'Projetos Arquitetônicos',
      description: 'Projetos completos de arquitetura residencial e comercial.',
      features: ['Arquitetura moderna', 'Projetos personalizados', 'Sustentabilidade'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop'
    },
    {
      icon: Palette,
      title: 'Design de Interiores',
      description: 'Design de interiores funcional e esteticamente atrativo.',
      features: ['Ambientes únicos', 'Funcionalidade', 'Estilo personalizado'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop'
    }
  ];

  const additionalServices = [
    'Construção de Piscina',
    'Construção de Telhado',
    'Instalação de Porcelanato',
    'Parede de Drywall',
    'Bancada de Granito',
    'Rebaixamento de Gesso',
    'Pintura Comercial',
    'Piso Vinílico',
    'Placa de Gesso 3D',
    'Projeto Elétrico',
    'Reforma Comercial',
    'Reforma de Fachada'
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em construção civil, desde projetos arquitetônicos 
            até acabamentos premium, sempre com qualidade e profissionalismo.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card group p-6 space-y-6">
                {/* Service Image */}
                <div className="relative overflow-hidden rounded-lg h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary/90 p-3 rounded-lg">
                      <Icon className="text-primary-foreground" size={24} />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    asChild
                    variant="ghost" 
                    className="group text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium"
                  >
                    <a href="#contact" className="flex items-center gap-2">
                      Saiba mais
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Outros Serviços Especializados
            </h3>
            <p className="text-muted-foreground">
              Além dos serviços principais, oferecemos uma ampla gama de soluções especializadas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-neutral-50 border border-border rounded-lg p-4 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer group"
              >
                <span className="text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="btn-primary">
              <a href="#contact">
                Solicitar Orçamento Personalizado
                <ArrowRight className="ml-2" size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;