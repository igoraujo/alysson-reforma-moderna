import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '#home', label: 'Início' },
    { href: '#services', label: 'Serviços' },
    { href: '#professionals', label: 'Profissionais' },
    { href: '#about', label: 'Sobre' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contato' },
  ];

  const contactInfo = [
    {
      icon: Phone,
      href: 'tel:+5531999109785',
      label: 'Telefone',
      value: '(31) 99910-9785',
      color: 'text-primary'
    },
    {
      icon: MessageSquare,
      href: 'https://api.whatsapp.com/send?phone=5531999109785&text=Olá!%20Cheguei%20até%20aqui%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços.%20Poderiam%20me%20ajudar?',
      label: 'WhatsApp',
      value: 'WhatsApp',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      href: 'mailto:alyssonconstrucoescivil@hotmail.com',
      label: 'E-mail',
      value: 'E-mail',
      color: 'text-accent'
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-medium' : 'bg-transparent'
    }`}>
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-custom">
          <div className="flex justify-center md:justify-end gap-6 text-sm">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
                  aria-label={contact.label}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{contact.value}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="py-4">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" className="text-2xl md:text-3xl font-display font-bold text-primary">
                Alysson Construção Civil
              </a>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                asChild 
                className="btn-accent ml-4"
              >
                <a href="#contact">Orçamento Grátis</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-large">
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-6 py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="px-6 pt-4">
                  <Button 
                    asChild 
                    className="btn-accent w-full"
                  >
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                      Orçamento Grátis
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;