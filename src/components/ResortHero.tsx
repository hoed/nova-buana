import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-resort.jpg';
import beachImage from '@/assets/activities-beach.jpg';
import villaImage from '@/assets/villa-overwater.jpg';

export const ResortHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const bannerImages = [
    heroImage,
    beachImage,
    villaImage
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Rotating Background Images */}
      <div className="absolute inset-0">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `translateY(${parallaxOffset}px)`,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              willChange: 'transform'
            }}
          />
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Location Badge */}
          <div className="fade-in-up flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wider font-light">
              Maldivian Paradise
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="fade-in-up font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-shadow-luxury">
            Nova Buana
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light italic mt-2">
              Redefined
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="fade-in-up text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-shadow-soft">
            Where untouched shores meet infinite horizons, discover your private sanctuary 
            amidst the tranquil whispers of the sea
          </p>
          
          {/* CTAs */}
          <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="min-w-48">
              Discover Paradise
            </Button>
            <Button variant="minimal" size="xl" className="min-w-48">
              Virtual Tour
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm uppercase tracking-wider font-light">Explore</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>
      
      {/* Ambient Particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
    </section>
  );
};