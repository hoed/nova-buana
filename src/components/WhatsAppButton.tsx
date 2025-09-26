import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = "+6287764994950"; // Replace with actual WhatsApp number
  const message = "Hello! I'm interested in making a reservation at Nova Buana Wisata. Could you please help me with more information?";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};