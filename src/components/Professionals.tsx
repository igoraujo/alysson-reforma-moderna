import { Badge, Building, Paintbrush, Zap, Droplets, Wrench, Hammer, Ruler } from 'lucide-react';

const Professionals = () => {
  const professionals = [
    {
      icon: Building,
      title: 'Arquiteto',
      description: 'Profissionais especializados em projetos arquitetônicos residenciais e comerciais.',
      specialties: ['Projetos residenciais', 'Arquitetura comercial', 'Design sustentável'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      icon: Ruler,
      title: 'Engenheiro Civil',
      description: 'Engenheiros experientes para estruturas seguras e projetos técnicos.',
      specialties: ['Estruturas', 'Fundações', 'Cálculos estruturais'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
    },
    {
      icon: Hammer,
      title: 'Pedreiro',
      description: 'Pedreiros qualificados com experiência em obras de todos os portes.',
      specialties: ['Alvenaria', 'Fundações', 'Estruturas'],
      image: 'https://images.unsplash.com/photo-1592921870789-04563d55041c?w=400&h=400&fit=crop&crop=face'
    },
    {
      icon: Zap,
      title: 'Eletricista',
      description: 'Eletricistas certificados para instalações seguras e eficientes.',
      specialties: ['Instalações elétricas', 'Automação', 'Manutenção'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      icon: Droplets,
      title: 'Bombeiro Hidráulico',
      description: 'Especialistas em sistemas hidráulicos e instalações sanitárias.',
      specialties: ['Instalações hidráulicas', 'Sistemas de água', 'Manutenção'],
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face'
    },
    {
      icon: Paintbrush,
      title: 'Pintor',
      description: 'Pintores especializados em técnicas avançadas e acabamentos premium.',
      specialties: ['Pintura decorativa', 'Texturas', 'Acabamentos'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
    },
    {
      icon: Wrench,
      title: 'Gesseiro',
      description: 'Gesseiros experientes em rebaixamento e decoração com gesso.',
      specialties: ['Rebaixamento', 'Gesso 3D', 'Molduras'],
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face'
    },
    {
      icon: Badge,
      title: 'Decoradora',
      description: 'Decoradoras para design de interiores e ambientação completa.',
      specialties: ['Design de interiores', 'Decoração', 'Ambientação'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b6c3?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <section id="professionals" className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Nossos <span className="text-gradient">Profissionais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe é formada por profissionais altamente qualificados e experientes, 
            prontos para transformar seu projeto em realidade.
          </p>
        </div>

        {/* Professionals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionals.map((professional, index) => {
            const Icon = professional.icon;
            return (
              <div key={index} className="professional-card group">
                {/* Professional Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={professional.image}
                    alt={professional.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 left-4 bg-primary/90 p-3 rounded-lg">
                    <Icon className="text-primary-foreground" size={20} />
                  </div>

                  {/* Specialties overlay */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="space-y-2">
                      {professional.specialties.map((specialty, specialtyIndex) => (
                        <div
                          key={specialtyIndex}
                          className="bg-white/90 text-neutral-900 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {professional.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {professional.description}
                  </p>

                  {/* Specialties for mobile */}
                  <div className="md:hidden flex flex-wrap gap-2">
                    {professional.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-6">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Mão de Obra Qualificada e Confiável
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Todos os nossos profissionais são cuidadosamente selecionados e possuem 
              experiência comprovada em suas áreas de atuação. Trabalhamos com uma 
              equipe integrada para garantir a melhor qualidade em cada projeto.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Profissionais Qualificados</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Projetos Executados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professionals;