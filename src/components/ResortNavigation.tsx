import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoNovaBuana from '@/assets/logo-novabuana.png';

export const ResortNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [tourDropdownOpen, setTourDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [tourDropdownTimeout, setTourDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [servicesDropdownTimeout, setServicesDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navEl = document.querySelector('nav');
          const offset = navEl ? (navEl as HTMLElement).getBoundingClientRect().height : 80;
          const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navEl = document.querySelector('nav');
        const offset = navEl ? (navEl as HTMLElement).getBoundingClientRect().height : 80;
        const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navigation = [
    { name: 'Home', id: 'hero' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const servicesSubmenu = [
    { name: 'Private Tours', path: '/private-tour' },
    { name: 'Consortium Tours', path: '/consortium-tours' },
    { name: 'Travel Documents', path: '/travel-documents' },
  ];

  const tourSubmenu = [
    { name: 'Outbound Tour', path: '/outbound-tour' },
    { name: 'Inbound Tours', path: 'https://beyourtour.xyz', external: true },
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
              <div className="flex items-center gap-3">
                <img 
                  src={logoNovaBuana} 
                  alt="Nova Buana Wisata Logo" 
                  className="h-10 lg:h-10 w-auto"
                />
                <h1 className={`font-serif text-2xl lg:text-3xl font-bold transition-luxury ${
                  scrolled ? 'text-foreground' : 'text-white'
                }`}>
                  
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if ('path' in item) {
                      navigate(item.path);
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className={`text-sm font-medium transition-luxury hover:text-primary ${
                    scrolled ? 'text-foreground' : 'text-white hover:text-white/80'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => {
                    if (servicesDropdownTimeout) clearTimeout(servicesDropdownTimeout);
                    setServicesDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setServicesDropdownOpen(false), 200);
                    setServicesDropdownTimeout(timeout);
                  }}
                  className={`flex items-center gap-1 text-sm font-medium transition-luxury hover:text-primary ${
                    scrolled ? 'text-foreground' : 'text-white hover:text-white/80'
                  }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {servicesDropdownOpen && (
                  <div 
                    onMouseEnter={() => {
                      if (servicesDropdownTimeout) clearTimeout(servicesDropdownTimeout);
                      setServicesDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => setServicesDropdownOpen(false), 200);
                      setServicesDropdownTimeout(timeout);
                    }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white backdrop-blur-sm rounded-lg shadow-luxury border border-border overflow-hidden z-50"
                  >
                    {servicesSubmenu.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          if (item.path) {
                            navigate(item.path);
                          }
                        }}
                        className="block w-full text-left px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Tours Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => {
                    if (tourDropdownTimeout) clearTimeout(tourDropdownTimeout);
                    setTourDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setTourDropdownOpen(false), 200);
                    setTourDropdownTimeout(timeout);
                  }}
                  className={`flex items-center gap-1 text-sm font-medium transition-luxury hover:text-primary ${
                    scrolled ? 'text-foreground' : 'text-white hover:text-white/80'
                  }`}
                >
                  Tours
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {tourDropdownOpen && (
                  <div 
                    onMouseEnter={() => {
                      if (tourDropdownTimeout) clearTimeout(tourDropdownTimeout);
                      setTourDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => setTourDropdownOpen(false), 200);
                      setTourDropdownTimeout(timeout);
                    }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white backdrop-blur-sm rounded-lg shadow-luxury border border-border overflow-hidden z-50"
                  >
                    {tourSubmenu.map((item) => (
                      item.external ? (
                        <a
                          key={item.name}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setTourDropdownOpen(false)}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <button
                          key={item.name}
                          onClick={() => {
                            setTourDropdownOpen(false);
                            if (item.path) {
                              navigate(item.path);
                            }
                          }}
                          className="block w-full text-left px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
                        >
                          {item.name}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-3 text-sm">
                <a 
                  href="https://wa.me/+6287764994950" 
                  className={`flex items-center gap-2 transition-smooth hover:text-primary ${
                    scrolled ? 'text-muted-foreground' : 'text-white/80'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>+62 8776 499 4950</span>
                </a>
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
                  onClick={() => {
                    if ('path' in item) {
                      navigate(item.path);
                      setIsOpen(false);
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Services submenu for mobile */}
              <div className="space-y-2">
                <div className="font-medium text-foreground py-2">Services</div>
                {servicesSubmenu.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsOpen(false);
                      if (item.path) {
                        navigate(item.path);
                      }
                    }}
                    className="block w-full text-left text-muted-foreground hover:text-primary transition-smooth py-2 pl-4"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              
              {/* Tours submenu for mobile */}
              <div className="space-y-2">
                <div className="font-medium text-foreground py-2">Tours</div>
              {tourSubmenu.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block text-muted-foreground hover:text-primary transition-smooth py-2 pl-4"
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsOpen(false);
                      if (item.path) {
                        navigate(item.path);
                      }
                    }}
                    className="block w-full text-left text-muted-foreground hover:text-primary transition-smooth py-2 pl-4"
                  >
                    {item.name}
                  </button>
                )
              ))}
              </div>
              
              <div className="pt-4 border-t border-border space-y-3">
                <a href="https://wa.me/+6287764994950" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
                  <Phone className="w-4 h-4" />
                  <span>+62 8776 499 4950</span>
                </a>
                <a href="mailto:info@novabuana.id" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
                  <Mail className="w-4 h-4" />
                  <span>info@novabuana.id</span>
                </a>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => scrollToSection('booking')}
                >
                  Book Your Tour
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
          <a href="#">Reserve Now</a>
        </Button>
      </div>
    </>
  );
};