import { MessageSquare, Phone } from 'lucide-react';

const FloatingContact = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5531999109785&text=Olá!%20Cheguei%20até%20aqui%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços.%20Poderiam%20me%20ajudar?"
        className="floating-contact whatsapp-float animate-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <MessageSquare size={24} />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+5531999109785"
        className="floating-contact phone-float"
        aria-label="Ligar agora"
      >
        <Phone size={24} />
      </a>
    </>
  );
};

export default FloatingContact;