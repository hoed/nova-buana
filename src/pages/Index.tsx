import { ResortNavigation } from '@/components/ResortNavigation';
import { ResortHero } from '@/components/ResortHero';
import { ResortExperience } from '@/components/ResortExperience';
import { ResortAccommodations } from '@/components/ResortAccommodations';
import { ResortActivities } from '@/components/ResortActivities';
import { ResortGallery } from '@/components/ResortGallery';
import { ResortBooking } from '@/components/ResortBooking';
import { Analytics } from "@vercel/analytics/react"

const Index = () => {
  return (
    <div className="min-h-screen">
      <ResortNavigation />
      
      <main>
        <section id="hero" className="min-h-screen">
          <ResortHero />
        </section>
        
        <section id="experience" className="scroll-mt-20">
          <ResortExperience />
        </section>
        
        <section id="accommodations" className="scroll-mt-20">
          <ResortAccommodations />
        </section>
        
        <section id="activities" className="scroll-mt-20">
          <ResortActivities />
        </section>
        
        <section id="gallery" className="scroll-mt-20">
          <ResortGallery />
        </section>
        
        <section id="booking" className="scroll-mt-20">
          <ResortBooking />
        </section>
      </main>
      
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
              Where untouched shores meet infinite horizons, discover your private sanctuary 
              amidst the tranquil whispers of the sea.
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

export default Index;
