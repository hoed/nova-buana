import { ResortNavigation } from '@/components/ResortNavigation';
import { ResortHero } from '@/components/ResortHero';
import { ResortExperience } from '@/components/ResortExperience';
import { ResortAccommodations } from '@/components/ResortAccommodations';
import { ResortActivities } from '@/components/ResortActivities';
import { ResortBooking } from '@/components/ResortBooking';

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
        
        <section id="booking" className="scroll-mt-20">
          <ResortBooking />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="font-serif text-2xl font-bold">Serenity Resort</h3>
            <p className="text-white/80 max-w-md mx-auto">
              Where untouched shores meet infinite horizons, discover your private sanctuary 
              amidst the tranquil whispers of the sea.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-white/60">
              <span>&copy; 2024 Serenity Resort. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
