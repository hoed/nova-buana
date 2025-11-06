import { ResortNavigation } from '@/components/ResortNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Analytics } from "@vercel/analytics/react";
import { Users, DollarSign, Calendar, MapPin, Heart, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import heroImage from '@/assets/consortium-tour-group.jpg';
import featureImage from '@/assets/consortium-tour-feature.jpg';

const ConsortiumTours = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Consortium Group Tours",
    "provider": {
      "@type": "TravelAgency",
      "name": "Nova Buana Wisata",
      "url": "https://novabuana.id"
    },
    "areaServed": "Worldwide",
    "description": "Paket tour berkelompok dengan harga terjangkau, jadwal teratur, dan tour leader berpengalaman"
  };

  return (
    <>
      <Helmet>
        <title>Consortium Tours - Paket Wisata Grup Hemat | Nova Buana Wisata</title>
        <meta name="title" content="Consortium Tours - Paket Wisata Grup Hemat | Nova Buana Wisata" />
        <meta name="description" content="Paket consortium tour hemat dengan jadwal keberangkatan teratur. Halal tour Eropa, Holy Land, Jepang, Korea, dan destinasi populer lainnya. Cocok untuk solo traveler!" />
        <meta name="keywords" content="consortium tour, tour group, paket wisata murah, halal tour, holy land tour, tour korea, tour jepang, solo traveler, grup wisata, layanan wisata luar negeri" />
        <link rel="canonical" href="https://novabuana.id/consortium-tours" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novabuana.id/consortium-tours" />
        <meta property="og:title" content="Consortium Tours - Paket Wisata Grup Hemat" />
        <meta property="og:description" content="Paket tour kelompok hemat dengan jadwal teratur dan tour leader berpengalaman." />
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
            aria-label="Consortium group tour travel experience"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-background" />
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-px bg-primary"></div>
              <span className="text-sm uppercase tracking-wider text-white/80 font-medium">
                Wisata Berkelompok
              </span>
              <div className="w-12 h-px bg-primary"></div>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Consortium Tours
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Bergabung dengan grup wisatawan lain untuk pengalaman seru dan hemat
            </p>
          </div>
        </section>
      </header>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Keunggulan Consortium Tour
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nikmati perjalanan bersama traveler lain dengan harga terjangkau
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Harga Terjangkau</h3>
                <p className="text-muted-foreground">
                  Biaya lebih hemat dengan berbagi transportasi dan akomodasi bersama grup
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Bertemu Teman Baru</h3>
                <p className="text-muted-foreground">
                  Kesempatan berkenalan dan berbagi pengalaman dengan sesama traveler
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Jadwal Teratur</h3>
                <p className="text-muted-foreground">
                  Keberangkatan rutin setiap bulan dengan itinerary yang sudah teruji
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Destinasi Pilihan</h3>
                <p className="text-muted-foreground">
                  Kunjungi tempat-tempat wisata populer dengan rute yang optimal
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Tour Leader Berpengalaman</h3>
                <p className="text-muted-foreground">
                  Didampingi tour leader profesional yang siap membantu selama perjalanan
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Solo Traveler Friendly</h3>
                <p className="text-muted-foreground">
                  Cocok untuk solo traveler yang ingin traveling tanpa ribet
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
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Bersama Lebih Seru
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bergabung dengan consortium tour berarti Anda akan bertemu dengan traveler lain yang memiliki minat yang sama. Berbagi pengalaman, cerita, dan momen indah bersama membuat perjalanan menjadi lebih berkesan.
              </p>
              <p className="text-lg text-muted-foreground">
                Dengan harga yang lebih terjangkau dan jadwal keberangkatan yang teratur, consortium tour adalah pilihan ideal untuk Anda yang ingin menjelajahi dunia tanpa ribet.
              </p>
            </div>
            <div>
              <img 
                src={featureImage} 
                alt="Pengalaman consortium tour berkelompok dengan harga hemat dan tour leader profesional" 
                className="rounded-2xl shadow-elegant w-full h-auto object-cover"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Paket Tour Tersedia
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pilihan paket consortium tour dengan berbagai destinasi menarik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Halal Tour Eropa', duration: '10-14 Hari' },
              { name: 'Holy Land Tour', duration: '8-10 Hari' },
              { name: 'China Muslim Tour', duration: '7-9 Hari' },
              { name: 'Japan Winter Tour', duration: '6-8 Hari' },
              { name: 'Korea Spring Tour', duration: '5-7 Hari' },
              { name: 'Turkey Heritage', duration: '9-11 Hari' },
              { name: 'Morocco Explorer', duration: '8-10 Hari' },
              { name: 'Dubai & Abu Dhabi', duration: '5-7 Hari' }
            ].map((pkg) => (
              <Card key={pkg.name} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {pkg.duration}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Lihat Detail
                  </Button>
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
                Daftar Consortium Tour Sekarang
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan grup kami dan nikmati pengalaman wisata yang tak terlupakan dengan harga terbaik
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

      {/* Footer */}
      <footer className="relative bg-charcoal text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/6249018721389627506.jpg')`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90" />
        
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

export default ConsortiumTours;
