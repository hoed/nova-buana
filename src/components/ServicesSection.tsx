import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Users, FileText, Globe, MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Users,
      title: 'Private Tour',
      description: 'Pengalaman wisata eksklusif yang dirancang khusus untuk Anda dan keluarga dengan fleksibilitas penuh',
      path: '/private-tour',
      color: 'text-primary'
    },
    {
      icon: Globe,
      title: 'Consortium Tours',
      description: 'Bergabung dengan grup wisatawan lain untuk pengalaman yang menyenangkan dan hemat biaya',
      path: '/consortium-tours',
      color: 'text-accent-dark'
    },
    {
      icon: FileText,
      title: 'Travel Documents',
      description: 'Layanan pengurusan visa, paspor, dan dokumen perjalanan lainnya yang mudah dan terpercaya',
      path: '/travel-documents',
      color: 'text-gold-dark'
    },
    {
      icon: Plane,
      title: 'Outbound Tour',
      description: 'Paket wisata luar negeri ke berbagai destinasi menarik di seluruh dunia',
      path: '/outbound-tour',
      color: 'text-primary-light'
    },
    {
      icon: MapPin,
      title: 'Inbound Tours',
      description: 'Eksplorasi keindahan Indonesia dengan guide profesional dan pengalaman autentik',
      path: 'https://beyourtour.xyz',
      external: true,
      color: 'text-accent-dark'
    },
    {
      icon: Star,
      title: 'Custom Packages',
      description: 'Rancang paket perjalanan sesuai keinginan Anda dengan bantuan travel consultant kami',
      path: '/#booking',
      color: 'text-gold-dark'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-primary"></div>
            <span className="text-sm uppercase tracking-wider text-primary font-medium">
              Layanan Kami
            </span>
            <div className="w-12 h-px bg-primary"></div>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Solusi Lengkap Perjalanan Anda
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Dari perencanaan hingga pelaksanaan, kami menyediakan berbagai layanan untuk memastikan 
            perjalanan Anda sempurna
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-luxury transition-all duration-500 cursor-pointer border-2 hover:border-primary/20"
              onClick={() => {
                if (service.external) {
                  window.open(service.path, '_blank', 'noopener,noreferrer');
                } else if (service.path.startsWith('/#')) {
                  const element = document.getElementById(service.path.substring(2));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  navigate(service.path);
                }
              }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                
                <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};