import { ResortNavigation } from '@/components/ResortNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Analytics } from "@vercel/analytics/react";
import { FileText, Globe, CheckCircle, Clock, Shield, HeadphonesIcon } from 'lucide-react';
import heroImage from '@/assets/travel-docs-hero.jpg';
import visaImage from '@/assets/visa-processing.jpg';

const TravelDocuments = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResortNavigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-background" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-primary"></div>
            <span className="text-sm uppercase tracking-wider text-white/80 font-medium">
              Document Services
            </span>
            <div className="w-12 h-px bg-primary"></div>
          </div>
          
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Travel Documents
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Layanan pengurusan visa, paspor, dan dokumen perjalanan lainnya yang mudah dan terpercaya
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Layanan Dokumen Perjalanan
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kami membantu mengurus semua kebutuhan dokumen perjalanan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Visa Processing</h3>
                <p className="text-muted-foreground">
                  Pengurusan visa turis, bisnis, dan jenis visa lainnya untuk berbagai negara
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Passport Services</h3>
                <p className="text-muted-foreground">
                  Bantuan pembuatan dan perpanjangan paspor baru atau yang akan habis masa berlaku
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Document Legalization</h3>
                <p className="text-muted-foreground">
                  Legalisasi dokumen di kedutaan untuk keperluan perjalanan atau studi
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Fast Track Process</h3>
                <p className="text-muted-foreground">
                  Layanan percepatan untuk kebutuhan mendesak dengan proses yang efisien
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Travel Insurance</h3>
                <p className="text-muted-foreground">
                  Asuransi perjalanan untuk perlindungan maksimal selama di luar negeri
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <HeadphonesIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Konsultasi Gratis</h3>
                <p className="text-muted-foreground">
                  Konsultasi gratis mengenai persyaratan dokumen untuk negara tujuan Anda
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
                src={visaImage} 
                alt="Visa Processing Services" 
                className="rounded-2xl shadow-elegant w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Proses Mudah & Terpercaya
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Pengurusan dokumen perjalanan tidak perlu rumit dan menyita waktu. Tim kami yang berpengalaman siap membantu mengurus semua kebutuhan visa, paspor, dan dokumen lainnya dengan proses yang cepat dan transparan.
              </p>
              <p className="text-lg text-muted-foreground">
                Dengan jaringan luas di berbagai kedutaan dan konsulat, kami memastikan aplikasi Anda diproses dengan efisien dan profesional.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Negara Tujuan Visa
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kami melayani pengurusan visa untuk berbagai negara di seluruh dunia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Schengen Visa',
              'USA Visa',
              'UK Visa',
              'Australia Visa',
              'Canada Visa',
              'Japan Visa',
              'South Korea Visa',
              'China Visa',
              'Singapore Visa',
              'Malaysia Visa',
              'Thailand Visa',
              'Dubai UAE Visa',
              'Turkey Visa',
              'Egypt Visa',
              'Saudi Arabia Visa',
              'New Zealand Visa'
            ].map((visa) => (
              <Card key={visa} className="hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                <CardContent className="p-4 text-center">
                  <p className="font-semibold group-hover:text-primary transition-colors">
                    {visa}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Proses Pengurusan
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Langkah mudah untuk mengurus dokumen perjalanan Anda
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Konsultasi & Informasi',
                  description: 'Hubungi kami untuk berkonsultasi mengenai jenis visa dan persyaratan dokumen'
                },
                {
                  step: '02',
                  title: 'Pengumpulan Dokumen',
                  description: 'Siapkan dan serahkan dokumen yang diperlukan sesuai dengan checklist kami'
                },
                {
                  step: '03',
                  title: 'Proses Pengajuan',
                  description: 'Tim kami akan memproses pengajuan visa Anda ke kedutaan yang bersangkutan'
                },
                {
                  step: '04',
                  title: 'Monitoring & Update',
                  description: 'Kami akan memberikan update progress aplikasi visa Anda secara berkala'
                },
                {
                  step: '05',
                  title: 'Pengambilan Dokumen',
                  description: 'Setelah visa disetujui, kami akan menginformasikan untuk pengambilan paspor'
                }
              ].map((process, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-serif text-2xl font-bold text-primary">{process.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold mb-2">{process.title}</h3>
                      <p className="text-muted-foreground">{process.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="ocean-gradient text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
                Butuh Bantuan Pengurusan Dokumen?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Hubungi kami sekarang untuk konsultasi gratis dan dapatkan bantuan pengurusan dokumen perjalanan Anda
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
  );
};

export default TravelDocuments;
