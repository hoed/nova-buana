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
            Every moment at our resort is crafted to awaken your senses and restore your spirit. 
            From sunrise yoga to moonlit dinners, discover experiences that transcend the ordinary.
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
                Arrival Ritual
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Step into paradise with our signature welcome ceremony. Traditional flower garlands, 
                refreshing coconut water, and the gentle melody of local musicians set the tone 
                for your transformative journey.
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary-dark">
                Learn More →
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
                Island Discovery
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Venture beyond your villa to uncover hidden lagoons, pristine coral gardens, 
                and secluded beaches accessible only to our guests. Each path reveals 
                new wonders of our protected marine sanctuary.
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary-dark">
                Explore →
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
                Sunset Meditation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As day transforms to night, join our guided meditation sessions on the beach. 
                Feel the sand beneath your feet and let the rhythmic waves carry away 
                the weight of the world.
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary-dark">
                Book Session →
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