import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users } from 'lucide-react';
import europeImage from '@/assets/europe.png';
import asianImage from '@/assets/asian.png';
import domesticImage from '@/assets/domestic.png';

export const DestinationsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const destinations = [
    {
      id: 1,
      name: 'European Highlights',
      category: 'international',
      location: 'Europe',
      duration: '10-14 Hari',
      travelers: '15-20 Orang',
      image: europeImage,
      description: 'Jelajahi keindahan kota-kota bersejarah di Eropa dengan paket tour yang lengkap'
    },
    {
      id: 2,
      name: 'Asian Adventures',
      category: 'international',
      location: 'Asia',
      duration: '7-10 Hari',
      travelers: '12-18 Orang',
      image: asianImage,
      description: 'Nikmati pesona Asia dengan budaya yang kaya dan kuliner yang menggugah selera'
    },
    {
      id: 3,
      name: 'Wonderful Indonesia',
      category: 'domestic',
      location: 'Indonesia',
      duration: '4-7 Hari',
      travelers: '10-15 Orang',
      image: domesticImage,
      description: 'Eksplorasi keindahan nusantara dari Sabang sampai Merauke'
    }
  ];

  const filteredDestinations = activeTab === 'all' 
    ? destinations 
    : destinations.filter(d => d.category === activeTab);

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-primary"></div>
            <span className="text-sm uppercase tracking-wider text-primary font-medium">
              Destinasi Populer
            </span>
            <div className="w-12 h-px bg-primary"></div>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Jelajahi Dunia Bersama Kami
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Pilihan destinasi terbaik untuk liburan impian Anda
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant={activeTab === 'all' ? 'hero' : 'outline'}
              onClick={() => setActiveTab('all')}
              className="min-w-32"
            >
              Semua
            </Button>
            <Button
              variant={activeTab === 'international' ? 'hero' : 'outline'}
              onClick={() => setActiveTab('international')}
              className="min-w-32"
            >
              International
            </Button>
            <Button
              variant={activeTab === 'domestic' ? 'hero' : 'outline'}
              onClick={() => setActiveTab('domestic')}
              className="min-w-32"
            >
              Domestik
            </Button>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden hover:shadow-luxury transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    {destination.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.location}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{destination.travelers}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById('booking');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Pesan Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};