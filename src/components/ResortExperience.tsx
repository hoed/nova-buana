import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Waves, Sunset, TreePine } from 'lucide-react';

export const ResortExperience = () => {
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
              }, index * 200);
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 sand-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="fade-in-up flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-primary"></div>
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              The Experience
            </span>
            <div className="w-12 h-px bg-primary"></div>
          </div>
          
          <h2 className="fade-in-up font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Journey Into
            <span className="block text-primary italic font-light mt-2">
              Extraordinary
            </span>
          </h2>
          
          <p className="fade-in-up text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Petualangan tak terlupakan menanti. Jelajahi keindahan Asia, 
            ciptakan memori abadi bersama Nova Buana Wisata.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Arrival */}
          <div className="fade-in-left group">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-luxury hover:shadow-ocean transition-luxury hover:-translate-y-2">
              <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Private Tours
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Private Tour Luar Negeri Nova Buana Wisata menghadirkan perjalanan eksklusif, 
                fleksibel, nyaman, dan penuh pengalaman berkesan dengan layanan personal 
                sesuai kebutuhan Anda.
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary-dark">
                Explore →
              </Button>
            </div>
          </div>

          {/* Exploration */}
          <div className="fade-in-up group">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-luxury hover:shadow-gold transition-luxury hover:-translate-y-2">
              <div className="w-16 h-16 sunset-gradient rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Consortium Tours
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Consortium Tour Luar Negeri Nova Buana Wisata menawarkan perjalanan hemat, 
                nyaman, terorganisir, dengan rombongan internasional, layanan profesional, 
                serta pengalaman budaya mendalam di destinasi impian Anda.
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary-dark">
                Learn More →
              </Button>
            </div>
          </div>

          {/* Serenity */}
          <div className="fade-in-right group">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-luxury hover:shadow-ocean transition-luxury hover:-translate-y-2">
              <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <Sunset className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Travel Documents
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nova Buana Wisata melayani pengurusan dokumen tur luar negeri secara cepat, mudah, aman, terpercaya, 
                mencakup paspor, visa seluruh dunia: single ataupun multiple entry, tiket, hingga asuransi perjalanan untuk kenyamanan Anda.
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary-dark">
                Submit Request →
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up">
          <Button variant="luxury" size="xl" className="min-w-64">
            Begin Your Journey
          </Button>
        </div>
      </div>

    </section>
  );
};