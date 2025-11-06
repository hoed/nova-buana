import { ResortNavigation } from '@/components/ResortNavigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Calendar, Users, Star } from 'lucide-react';
import { Helmet } from 'react-helmet';
import asianTour from '@/assets/asian.png';
import europeTour from '@/assets/europe.png';
import { Analytics } from "@vercel/analytics/react";

const tourPackages = [
  {
    id: 1,
    destination: 'Asian Paradise',
    country: 'Thailand, Vietnam, Singapore',
    image: asianTour,
    duration: '10 Days / 9 Nights',
    price: 'Starting from $2,499',
    rating: 4.9,
    reviews: 245,
    highlights: [
      'Bangkok Grand Palace',
      'Ha Long Bay Cruise',
      'Marina Bay Gardens',
      'Street Food Tours'
    ],
    description: 'Explore the vibrant cultures and stunning landscapes of Southeast Asia'
  },
  {
    id: 2,
    destination: 'European Elegance',
    country: 'France, Italy, Switzerland',
    image: europeTour,
    duration: '14 Days / 13 Nights',
    price: 'Starting from $4,299',
    rating: 5.0,
    reviews: 189,
    highlights: [
      'Eiffel Tower Experience',
      'Vatican Museums',
      'Swiss Alps Adventure',
      'Mediterranean Cruise'
    ],
    description: 'Journey through historic cities and breathtaking European landscapes'
  },
  {
    id: 3,
    destination: 'Asian Heritage',
    country: 'Japan, South Korea, Taiwan',
    image: asianTour,
    duration: '12 Days / 11 Nights',
    price: 'Starting from $3,799',
    rating: 4.8,
    reviews: 312,
    highlights: [
      'Tokyo Skyline Tour',
      'Kyoto Temples',
      'Seoul K-Pop Culture',
      'Taipei Night Markets'
    ],
    description: 'Discover ancient traditions meeting modern innovation'
  },
  {
    id: 4,
    destination: 'European Classics',
    country: 'Spain, Portugal, Morocco',
    image: europeTour,
    duration: '11 Days / 10 Nights',
    price: 'Starting from $3,199',
    rating: 4.7,
    reviews: 198,
    highlights: [
      'Sagrada Familia',
      'Lisbon Coastline',
      'Marrakech Medina',
      'Flamenco Shows'
    ],
    description: 'Experience the passion and charm of Mediterranean culture'
  }
];

const OutboundTour = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navEl = document.querySelector('nav');
      const offset = navEl ? (navEl as HTMLElement).getBoundingClientRect().height : 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TourPackage",
    "name": "Outbound Tours Nova Buana Wisata",
    "description": "Paket tour internasional ke Asia, Eropa, dan destinasi menarik lainnya dengan guide profesional dan layanan premium",
    "provider": {
      "@type": "TravelAgency",
      "name": "Nova Buana Wisata",
      "url": "https://novabuana.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Outbound Tour - Paket Wisata Luar Negeri Terbaik | Nova Buana Wisata</title>
        <meta name="title" content="Outbound Tour - Paket Wisata Luar Negeri Terbaik" />
        <meta name="description" content="Paket outbound tour ke Asia, Eropa, dan destinasi internasional menarik. Tour Thailand, Vietnam, Singapore, Paris, Roma, Swiss Alps dengan guide profesional. Harga mulai $2,499." />
        <meta name="keywords" content="outbound tour, tour luar negeri, paket wisata asia, paket wisata eropa, tour singapore, tour thailand, tour eropa, paket tour internasional" />
        <link rel="canonical" href="https://novabuana.com/outbound-tour" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novabuana.com/outbound-tour" />
        <meta property="og:title" content="Outbound Tour - Paket Wisata Luar Negeri" />
        <meta property="og:description" content="Paket tour internasional ke destinasi menarik dengan guide profesional dan layanan premium." />
        <meta property="og:image" content={asianTour} />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
    
    <div className="min-h-screen bg-background">
      <ResortNavigation />
      
      {/* Hero Section */}
      <header>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${asianTour})`,
              filter: 'blur(4px)',
              transform: 'scale(1.1)',
            }}
            role="img"
            aria-label="International outbound tour destinations"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-background" />
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Outbound Tours
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Jelajahi destinasi wisata internasional terbaik dengan paket tour yang dirancang khusus untuk pengalaman tak terlupakan
            </p>
          </div>
        </section>
      </header>

      {/* Tour Packages */}
      <section id="packages" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured Destinations
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Handpicked tours designed to create unforgettable memories
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tourPackages.map((tour) => (
              <Card key={tour.id} className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={`${tour.destination} - ${tour.country} tour package`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-semibold text-foreground">{tour.rating}</span>
                    <span className="text-muted-foreground text-sm">({tour.reviews})</span>
                  </div>
                  
                  {/* Destination Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-3xl font-bold mb-2">{tour.destination}</h3>
                    <div className="flex items-center gap-2 text-white/90">
                      <MapPin className="w-4 h-4" />
                      <span>{tour.country}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
                  
                  {/* Tour Details */}
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>Group Tour</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tour Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tour.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Price per person</p>
                      <p className="text-2xl font-bold text-primary">{tour.price}</p>
                    </div>
                    <Button variant="hero" size="lg" onClick={() => scrollToSection('booking')}>
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Travel With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Expert Guides</h3>
              <p className="text-muted-foreground">Professional local guides who bring destinations to life</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Premium Locations</h3>
              <p className="text-muted-foreground">Carefully selected accommodations in prime locations</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Small Groups</h3>
              <p className="text-muted-foreground">Intimate group sizes for a personalized experience</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="booking" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden p-12 lg:p-16">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url(${europeTour})` }}
            />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready for Your Adventure?
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                Contact us today to customize your perfect international tour package
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <a href="https://wa.me/+6287764994950">Contact Us on WhatsApp</a>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="mailto:hoedhud@gmail.com">Email Us</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-charcoal text-white py-20 overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/6249018721389627506.jpg')`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)',
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Nova Buana Wisata
            </h3>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light drop-shadow-md">
              Novabuana — agensi wisata mewah yang menggabungkan perjalanan dan kenyamanan, 
              menawarkan pengalaman eksklusif dan holistik.
            </p>
            <div className="pt-6 border-t border-white/20">
              <p className="text-white/60 text-sm mt-2">
                &copy; 2025 Nova Buana Wisata. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Analytics />
    </div>
    </>
  );
};

export default OutboundTour;
