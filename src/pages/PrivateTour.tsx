import { ResortNavigation } from '@/components/ResortNavigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Analytics } from "@vercel/analytics/react";
import { Users, MapPin, Calendar, Star, Globe, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';
import heroImage from '@/assets/private-tour-hero.jpg';
import featureImage from '@/assets/private-tour-feature.jpg';

const PrivateTour = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Private Tour",
    "provider": {
      "@type": "TravelAgency",
      "name": "Nova Buana Wisata",
      "url": "https://novabuana.id"
    },
    "areaServed": "Worldwide",
    "description": "Paket tour pribadi eksklusif dengan itinerary yang dapat disesuaikan, guide profesional, dan layanan premium"
  };

  return (
    <>
      <Helmet>
        <title>Private Tour - Paket Wisata Pribadi Eksklusif | Nova Buana Wisata</title>
        <meta name="title" content="Private Tour - Paket Wisata Pribadi Eksklusif | Nova Buana Wisata" />
        <meta name="description" content="Paket private tour eksklusif dengan itinerary fleksibel, guide profesional, dan layanan VIP. Jelajahi dunia dengan kecepatan Anda sendiri. Konsultasi gratis!" />
        <meta name="keywords" content="private tour, tour pribadi, paket wisata eksklusif, tour vip, custom itinerary, wisata keluarga, tour guide profesional" />
        <link rel="canonical" href="https://novabuana.id/private-tour" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novabuana.id/private-tour" />
        <meta property="og:title" content="Private Tour - Paket Wisata Pribadi Eksklusif" />
        <meta property="og:description" content="Paket private tour dengan itinerary fleksibel dan layanan VIP untuk pengalaman perjalanan yang personal." />
        <meta property="og:image" content={heroImage} />
        
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
              backgroundImage: `url(${heroImage})`,
            }}
            role="img"
            aria-label="Private tour luxury travel experience"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-background" />
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-px bg-primary"></div>
              <span className="text-sm uppercase tracking-wider text-white/80 font-medium">
                Layanan Premium
              </span>
              <div className="w-12 h-px bg-primary"></div>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Private Tour Eksklusif
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Pengalaman wisata pribadi yang dirancang khusus untuk Anda dan keluarga
            </p>
          </div>
        </section>
      </header>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Keunggulan Private Tour
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nikmati kebebasan dan privasi penuh dalam setiap perjalanan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Flexible Group Size</h3>
                <p className="text-muted-foreground">
                  Perjalanan khusus untuk Anda, keluarga, atau grup kecil tanpa bergabung dengan orang lain
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Custom Itinerary</h3>
                <p className="text-muted-foreground">
                  Tentukan jadwal dan destinasi sesuai keinginan Anda, dengan fleksibilitas penuh
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Premium Experience</h3>
                <p className="text-muted-foreground">
                  Layanan VIP dengan guide profesional yang berpengalaman dan berbahasa Indonesia
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Worldwide Destinations</h3>
                <p className="text-muted-foreground">
                  Jelajahi destinasi favorit Anda di seluruh dunia dengan paket yang disesuaikan
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Time Flexibility</h3>
                <p className="text-muted-foreground">
                  Atur waktu kunjungan sesuai kenyamanan Anda tanpa terikat jadwal grup
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Door-to-Door Service</h3>
                <p className="text-muted-foreground">
                  Penjemputan dan pengantaran dari hotel atau lokasi yang Anda tentukan
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <img 
                src={featureImage} 
                alt="Pengalaman private tour eksklusif dengan guide profesional dan layanan VIP Nova Buana Wisata" 
                className="rounded-2xl shadow-elegant w-full h-auto object-cover"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Pengalaman Eksklusif
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nikmati kebebasan untuk mengeksplorasi destinasi impian Anda dengan kecepatan dan gaya Anda sendiri. Private tour kami dirancang untuk memberikan pengalaman wisata yang benar-benar personal dan tak terlupakan.
              </p>
              <p className="text-lg text-muted-foreground">
                Dengan guide profesional yang berpengalaman, transportasi eksklusif, dan itinerary yang dapat disesuaikan, setiap momen perjalanan Anda akan menjadi kenangan berharga.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Destinasi Populer
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Paket private tour kami tersedia untuk berbagai destinasi menarik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {['Europe Tour', 'Asia Tour', 'Middle East Tour', 'America Tour', 'Australia Tour', 'Africa Safari'].map((dest) => (
              <Card key={dest} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {dest}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Paket tour eksklusif dengan itinerary yang dapat disesuaikan
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="ocean-gradient text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
                Siap Merencanakan Private Tour Anda?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Hubungi tim kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk perjalanan impian Anda
              </p>
              <Button 
                variant="minimal" 
                size="xl"
                onClick={() => window.location.href = '/#booking'}
              >
                Request Reservation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />

      <Analytics />
    </div>
    </>
  );
};

export default PrivateTour;
