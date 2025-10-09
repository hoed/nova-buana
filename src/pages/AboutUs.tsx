import { ResortNavigation } from '@/components/ResortNavigation';
import { Building2, Users, Award, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <ResortNavigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/6249018721389627506.jpg')`,
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-shadow-luxury">
            About Nova Buana Wisata
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-shadow-soft">
            Your Gateway to Extraordinary Travel Experiences
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nova Buana Wisata adalah agensi wisata mewah yang menghadirkan pengalaman perjalanan eksklusif dan holistik. 
              Kami menggabungkan kenyamanan, kemewahan, dan petualangan untuk menciptakan momen yang tak terlupakan bagi setiap klien kami.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dengan dedikasi penuh terhadap detail dan layanan berkelas dunia, kami berkomitmen untuk mengubah setiap perjalanan 
              menjadi pengalaman yang luar biasa, memenuhi impian dan melampaui ekspektasi Anda.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-8 rounded-2xl bg-card shadow-luxury hover:shadow-ocean transition-smooth">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full ocean-gradient flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Komitmen terhadap standar kualitas tertinggi dalam setiap aspek layanan kami.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card shadow-luxury hover:shadow-ocean transition-smooth">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full sunset-gradient flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Personal Touch</h3>
              <p className="text-muted-foreground">
                Setiap perjalanan dirancang khusus sesuai dengan preferensi dan keinginan Anda.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card shadow-luxury hover:shadow-ocean transition-smooth">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full ocean-gradient flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Luxury</h3>
              <p className="text-muted-foreground">
                Pengalaman eksklusif dengan akomodasi dan layanan kelas premium.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card shadow-luxury hover:shadow-ocean transition-smooth">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full sunset-gradient flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                Jangkauan destinasi wisata domestik dan internasional yang luas.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            <div className="p-10 rounded-2xl sand-gradient shadow-luxury">
              <h3 className="font-serif text-3xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Memberikan pengalaman wisata yang tak terlupakan dengan menggabungkan kemewahan, kenyamanan, 
                dan petualangan. Kami berusaha untuk menjadi mitra terpercaya dalam setiap perjalanan Anda, 
                menghadirkan layanan yang personal dan berkelas dunia.
              </p>
            </div>

            <div className="p-10 rounded-2xl sand-gradient shadow-luxury">
              <h3 className="font-serif text-3xl font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Menjadi agensi wisata mewah terdepan yang diakui secara global, menghadirkan pengalaman 
                perjalanan holistik yang menginspirasi, menyegarkan, dan mengubah kehidupan setiap klien kami 
                melalui destinasi dan layanan yang luar biasa.
              </p>
            </div>
          </div>

          {/* Services Overview */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              What We Offer
            </h2>
            <div className="space-y-6 text-left">
              <div className="p-6 rounded-xl bg-card shadow-luxury hover:shadow-ocean transition-smooth">
                <h4 className="font-serif text-2xl font-semibold text-foreground mb-3">Private Tours</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Tur pribadi yang dirancang khusus untuk memberikan pengalaman eksklusif dan personal sesuai dengan keinginan Anda.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card shadow-luxury hover:shadow-ocean transition-smooth">
                <h4 className="font-serif text-2xl font-semibold text-foreground mb-3">Consortium Tours</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Paket wisata berkelompok yang menawarkan nilai terbaik dengan kualitas layanan premium dan destinasi pilihan.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card shadow-luxury hover:shadow-ocean transition-smooth">
                <h4 className="font-serif text-2xl font-semibold text-foreground mb-3">Travel Documents</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Layanan lengkap untuk pengurusan dokumen perjalanan, visa, dan persyaratan administratif lainnya.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card shadow-luxury hover:shadow-ocean transition-smooth">
                <h4 className="font-serif text-2xl font-semibold text-foreground mb-3">Outbound & Inbound Tours</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Paket wisata domestik dan internasional ke berbagai destinasi menarik di seluruh dunia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

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
    </div>
  );
};

export default AboutUs;
