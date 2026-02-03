import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Clock } from 'lucide-react';
import logoNovaBuana from '@/assets/logo-novabuana.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Galeri', path: '/gallery' },
  ];

  const serviceLinks = [
    { name: 'Private Tour', path: '/private-tour' },
    { name: 'Consortium Tours', path: '/consortium-tours' },
    { name: 'Outbound Tour', path: '/outbound-tour' },
    { name: 'Dokumen Perjalanan', path: '/travel-documents' },
  ];

  const destinationLinks = [
    { name: 'Tour Eropa', path: '/outbound-tour' },
    { name: 'Tour Asia', path: '/outbound-tour' },
    { name: 'Tour Jepang & Korea', path: '/outbound-tour' },
    { name: 'Tour Australia', path: '/outbound-tour' },
  ];

  return (
    <footer className="relative bg-charcoal text-white overflow-hidden" role="contentinfo">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/6249018721389627506.jpg')`,
          filter: 'blur(8px)',
          transform: 'scale(1.1)',
        }}
        aria-hidden="true"
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/85 to-charcoal/95" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={logoNovaBuana} 
                alt="Nova Buana Wisata Logo" 
                className="h-12 w-auto"
                width={48}
                height={48}
                loading="lazy"
              />
              <h3 className="font-serif text-2xl font-bold text-white">
                Nova Buana Wisata
              </h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Agensi wisata terpercaya yang menghadirkan pengalaman perjalanan eksklusif dan holistik. 
              Menggabungkan kenyamanan, kemewahan, dan petualangan untuk menciptakan momen tak terlupakan.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/novabuanawisata" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook Nova Buana Wisata"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/novabuanawisata" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram Nova Buana Wisata"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@novabuanawisata" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube Nova Buana Wisata"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-white border-b border-white/20 pb-2">
              Menu Utama
            </h4>
            <nav aria-label="Footer navigation - Main">
              <ul className="space-y-3">
                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <h4 className="font-serif text-lg font-semibold text-white border-b border-white/20 pb-2 pt-4">
              Layanan Kami
            </h4>
            <nav aria-label="Footer navigation - Services">
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Destinations */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-white border-b border-white/20 pb-2">
              Destinasi Populer
            </h4>
            <nav aria-label="Footer navigation - Destinations">
              <ul className="space-y-3">
                {destinationLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-white border-b border-white/20 pb-2">
              Hubungi Kami
            </h4>
            <address className="not-italic space-y-4">
              <a 
                href="https://wa.me/+6287764994950" 
                className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <Phone className="w-5 h-5 mt-0.5 text-primary" />
                <span>+62 8776 499 4950</span>
              </a>
              <a 
                href="mailto:info@novabuana.id" 
                className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <Mail className="w-5 h-5 mt-0.5 text-primary" />
                <span>info@novabuana.id</span>
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>Jakarta Barat, DKI Jakarta, Indonesia</span>
              </div>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <Clock className="w-5 h-5 mt-0.5 text-primary" />
                <span>Senin - Sabtu: 09:00 - 18:00 WIB</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; {currentYear} Nova Buana Wisata. All rights reserved.
            </p>
            
            {/* Sitemap Links for SEO */}
            <nav aria-label="Footer legal links" className="flex flex-wrap justify-center gap-4 text-sm">
              <a 
                href="/sitemap.xml" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                Sitemap
              </a>
              <span className="text-white/30">|</span>
              <Link 
                to="/about"
                className="text-white/50 hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <span className="text-white/30">|</span>
              <Link 
                to="/about"
                className="text-white/50 hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
