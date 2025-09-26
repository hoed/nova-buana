import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Waves, Bed, Bath } from 'lucide-react';
import villaImage from '@/assets/villa-overwater.jpg';

export const ResortAccommodations = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fallback to ensure visibility even if IntersectionObserver fails
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current
          .querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in')
          .forEach((el) => (el as HTMLElement).classList.add('animate-in'));
      }
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const accommodations = [
    {
      name: "Asia Tour",
      type: "Singapore, Hongkong, Korea, Japan, etc",

      features: ["Private deck", "Direct ocean access", "Glass floor panels", "Infinity plunge pool"],
      description: "Jelajahi keajaiban Asia. Dari budaya kuno hingga pemandangan memukau, petualangan tak terlupakan menanti Anda.",
      price: "From $1,200",
      image: villaImage
    },
    {
      name: "Europe Tour",
      type: "England, Germany, French, Dutch, Swiss",
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      features: ["Private beach access", "Tropical garden", "Outdoor shower", "Hammock terrace"],
      description: "Jelajahi keajaiban Eropa: sejarah, seni, dan budaya memukau menanti Anda di setiap kota.",
      price: "From $900",
      image: villaImage
    },
    {
      name: "Domestic Trip",
      type: "Bandung, Jogjakarta, Bali",
      guests: 6,
      bedrooms: 3,
      bathrooms: 3,
      features: ["Panoramic sunset views", "Private chef service", "Wine cellar", "Rooftop terrace"],
      description: "Rasakan magisnya Bandung, kehangatan Yogyakarta, dan surga Bali. Eksplorasi Indonesia tak terlupakan, ciptakan cerita indahmu!",
      price: "From $2,500",
      image: villaImage
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="fade-in-up flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-primary"></div>
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Accommodations
            </span>
            <div className="w-12 h-px bg-primary"></div>
          </div>
          
          <h2 className="fade-in-up font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Your Private
            <span className="block text-primary italic font-light mt-2">
              Sanctuary
            </span>
          </h2>
          
          <p className="fade-in-up text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Temukan ketenangan dan kemewahan. Liburan pribadi Anda, relaksasi sempurna di destinasi eksotis pilihan.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="space-y-16 lg:space-y-24">
          {accommodations.map((accommodation, index) => (
            <div 
              key={accommodation.name}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`fade-in-${index % 2 === 0 ? 'left' : 'right'} ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group overflow-hidden rounded-lg shadow-luxury">
                  <img 
                    src={accommodation.image} 
                    alt={accommodation.name}
                    className="w-full h-80 lg:h-96 object-cover transition-luxury group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-luxury" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
                    {accommodation.type}
                  </Badge>
                  <div className="absolute top-4 right-4 text-white font-medium text-lg">
                    {accommodation.price}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`fade-in-${index % 2 === 0 ? 'right' : 'left'} space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {accommodation.name}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {accommodation.description}
                  </p>
                </div>



                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Exclusive Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {accommodation.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Waves className="w-3 h-3 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="hero" size="lg">
                    Book Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Virtual Tour
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};