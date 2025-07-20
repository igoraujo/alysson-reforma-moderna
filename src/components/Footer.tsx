import { Phone, MessageSquare, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Reforma de Casa',
    'Construção de Casa', 
    'Reforma de Apartamento',
    'Acabamento Premium',
    'Projetos Arquitetônicos',
    'Design de Interiores',
    'Pintura Especializada',
    'Instalações Hidráulicas'
  ];

  const professionals = [
    'Arquitetos',
    'Engenheiros Civis',
    'Pedreiros',
    'Eletricistas',
    'Bombeiros Hidráulicos',
    'Pintores',
    'Gesseiros',
    'Decoradoras'
  ];

  const serviceAreas = [
    'Belo Horizonte',
    'Contagem',
    'Betim',
    'Nova Lima',
    'Ribeirão das Neves',
    'Santa Luzia',
    'Vespasiano',
    'Sabará'
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Alysson Construção Civil
              </h3>
              <p className="text-white/70">
                Especialistas em obras, reformas e construções em Belo Horizonte 
                e região metropolitana.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <a 
                  href="tel:+5531999109785" 
                  className="text-white/90 hover:text-accent transition-colors"
                >
                  (31) 99910-9785
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <a 
                  href="mailto:alyssonconstrucoescivil@hotmail.com" 
                  className="text-white/90 hover:text-accent transition-colors break-all"
                >
                  alyssonconstrucoescivil@hotmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={18} />
                <span className="text-white/90">
                  Belo Horizonte, MG<br />
                  Região Metropolitana
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-accent flex-shrink-0 mt-1" size={18} />
                <div className="text-white/90 text-sm">
                  <p>Seg - Sex: 08:00 - 18:00</p>
                  <p>Sábado: 08:00 - 12:00</p>
                  <p className="text-accent">Emergências: 24h</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Redes Sociais</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Professionals */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Profissionais</h4>
            <ul className="space-y-3">
              {professionals.map((professional, index) => (
                <li key={index}>
                  <a 
                    href="#professionals" 
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {professional}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Regiões Atendidas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-white/70 text-sm">
                  {area}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-lg">
              <h5 className="font-semibold text-white mb-2">Orçamento Grátis</h5>
              <p className="text-white/70 text-xs mb-3">
                Solicite seu orçamento sem compromisso
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5531999109785&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20gratuito."
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <MessageSquare size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-white/70 text-sm">
              <p>&copy; {currentYear} Alysson Construção Civil. Todos os direitos reservados.</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <a href="#about" className="hover:text-accent transition-colors">
                  Sobre
                </a>
                <a href="#services" className="hover:text-accent transition-colors">
                  Serviços
                </a>
                <a href="#professionals" className="hover:text-accent transition-colors">
                  Profissionais
                </a>
                <a href="#blog" className="hover:text-accent transition-colors">
                  Blog
                </a>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </div>
            </div>
          </div>

          {/* SEO Text */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-xs text-white/50 space-y-2">
              <p>
                <strong>Alysson Construção Civil</strong> - Empresa especializada em obras, reformas e construções em 
                Belo Horizonte e região metropolitana. Oferecemos serviços de construção de casas, 
                reforma de apartamentos, projetos arquitetônicos, design de interiores e muito mais.
              </p>
              <p>
                <strong>Palavras-chave:</strong> obras BH, reformas Belo Horizonte, construção civil, 
                arquiteto BH, engenheiro civil, reforma apartamento, reforma casa, construção casa, 
                pintura, acabamento, design interiores, Contagem, Betim, Nova Lima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;