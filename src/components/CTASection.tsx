import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-resort.jpg';

export const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/95" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Siap Memulai Petualangan Anda?
          </h2>
          
          <p className="text-lg lg:text-2xl text-white/90 mb-12 leading-relaxed drop-shadow-md">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik 
            untuk perjalanan impian Anda
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="minimal" 
              size="xl"
              className="min-w-48"
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pesan Sekarang
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="min-w-48 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-charcoal transition-all"
              onClick={() => window.open('https://wa.me/+6287764994950', '_blank', 'noopener,noreferrer')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80">
            <a 
              href="https://wa.me/+6287764994950" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">+62 8776 499 4950</span>
            </a>
            
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            
            <a 
              href="mailto:info@novabuana.id" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg">info@novabuana.id</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};