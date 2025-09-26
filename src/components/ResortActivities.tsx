import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sailboat, Fish, Sparkles, Mountain, Camera, Heart } from 'lucide-react';
import activitiesImage from '@/assets/activities-beach.jpg';
import spaImage from '@/assets/spa-wellness.jpg';

export const ResortActivities = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-in');
              }, index * 100);
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

  const activities = [
    {
      icon: Sailboat,
      title: "Ocean Adventures",
      description: "Sailing, kayaking, and sunset cruises across pristine waters",
      gradient: "ocean-gradient"
    },
    {
      icon: Fish,
      title: "Marine Discovery",
      description: "Snorkeling and diving in protected coral reef ecosystems",
      gradient: "sunset-gradient"
    },
    {
      icon: Sparkles,
      title: "Spa & Wellness",
      description: "Rejuvenating treatments inspired by ancient healing traditions",
      gradient: "ocean-gradient"
    },
    {
      icon: Mountain,
      title: "Island Exploration",
      description: "Guided nature walks through tropical rainforest paths",
      gradient: "sunset-gradient"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture breathtaking moments with professional guidance",
      gradient: "ocean-gradient"
    },
    {
      icon: Heart,
      title: "Romantic Experiences",
      description: "Private dinners and couples' rituals under starlit skies",
      gradient: "sunset-gradient"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 sand-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="fade-in-up flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-primary"></div>
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Activities & Experiences
            </span>
            <div className="w-12 h-px bg-primary"></div>
          </div>
          
          <h2 className="fade-in-up font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Endless
            <span className="block text-primary italic font-light mt-2">
              Adventures
            </span>
          </h2>
          
          <p className="fade-in-up text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From exhilarating water sports to tranquil wellness experiences, every day offers 
            new opportunities to connect with nature and discover your sense of wonder.
          </p>
        </div>

        {/* Featured Activity Sections */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Water Activities */}
          <div className="fade-in-left space-y-6">
            <div className="relative overflow-hidden rounded-lg shadow-luxury group">
              <img 
                src={activitiesImage} 
                alt="Beach Activities"
                className="w-full h-80 object-cover transition-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 hero-gradient opacity-60 group-hover:opacity-40 transition-luxury" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-serif text-2xl font-bold mb-2">Water Sports Paradise</h3>
                <p className="text-sm opacity-90">Crystal-clear waters await your adventure</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-serif text-xl font-semibold text-foreground">Aquatic Excellence</h4>
              <p className="text-muted-foreground leading-relaxed">
                Dive into our world-class water sports program featuring professional-grade equipment 
                and certified instructors. From gentle kayaking through mangrove channels to 
                exhilarating deep-sea fishing expeditions.
              </p>
              <Button variant="hero" size="lg">
                Explore Water Activities
              </Button>
            </div>
          </div>

          {/* Wellness */}
          <div className="fade-in-right space-y-6">
            <div className="relative overflow-hidden rounded-lg shadow-luxury group">
              <img 
                src={spaImage} 
                alt="Spa & Wellness"
                className="w-full h-80 object-cover transition-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 hero-gradient opacity-60 group-hover:opacity-40 transition-luxury" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-serif text-2xl font-bold mb-2">Wellness Sanctuary</h3>
                <p className="text-sm opacity-90">Rejuvenate your mind, body, and soul</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-serif text-xl font-semibold text-foreground">Holistic Healing</h4>
              <p className="text-muted-foreground leading-relaxed">
                Our award-winning spa combines ancient healing traditions with modern wellness 
                techniques. Experience transformative treatments in pavilions surrounded by 
                lush tropical gardens and flowing water features.
              </p>
              <Button variant="luxury" size="lg">
                Book Spa Treatment
              </Button>
            </div>
          </div>
        </div>

        {/* Activity Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {activities.map((activity, index) => (
            <Card key={activity.title} className={`scale-in group hover:shadow-luxury transition-luxury border-0 bg-white/70 backdrop-blur-sm`}>
              <CardContent className="p-8 text-center space-y-4">
                <div className={`w-16 h-16 ${activity.gradient} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-smooth`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
              Create Your Perfect Itinerary
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our concierge team will craft a personalized experience schedule 
              tailored to your interests and preferences.
            </p>
            <Button variant="hero" size="xl" className="min-w-64">
              Plan My Tour
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};