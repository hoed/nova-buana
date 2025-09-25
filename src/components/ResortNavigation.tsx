import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const ResortNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navEl = document.querySelector('nav');
      const offset = navEl ? (navEl as HTMLElement).getBoundingClientRect().height : 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navigation = [
    { name: 'Home', id: 'hero' },
    { name: 'Experience', id: 'experience' },
    { name: 'Accommodations', id: 'accommodations' },
    { name: 'Activities', id: 'activities' },
    { name: 'Reservations', id: 'booking' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-luxury' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className={`font-serif text-2xl lg:text-3xl font-bold transition-luxury ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}>
                Nova Buana
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-luxury hover:text-primary ${
                    scrolled ? 'text-foreground' : 'text-white hover:text-white/80'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className={`flex items-center gap-2 ${
                  scrolled ? 'text-muted-foreground' : 'text-white/80'
                }`}>
                  <Phone className="w-4 h-4" />
                  <span>+960 664 2345</span>
                </div>
              </div>
              <Button
                variant={scrolled ? "hero" : "minimal"}
                size="sm"
                onClick={() => scrollToSection('booking')}
              >
                Book Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 transition-luxury ${
                  scrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-border">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+960 664 2345</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>reservations@serenity.com</span>
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => scrollToSection('booking')}
                >
                  Book Your Stay
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile floating CTA */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
        <Button
          variant="hero"
          size="lg"
          className="w-full shadow-luxury"
          onClick={() => scrollToSection('booking')}
        >
          Reserve Now
        </Button>
      </div>
    </>
  );
};