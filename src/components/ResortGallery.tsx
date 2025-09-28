import { useState, useEffect } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import pic1 from '@/assets/6249018721389627511.jpg';
import pic2 from '@/assets/6249018721389627515.jpg';
import pic3 from '@/assets/6249018721389627516.jpg';
import pic4 from '@/assets/6249018721389627520.jpg';
import pic5 from '@/assets/6249018721389627518.jpg';
import pic6 from '@/assets/6249018721389627517.jpg';

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: pic1,
    title: 'Religion Tourism',
    description: 'Crystal clear waters and white sandy beaches',
    category: 'Beach'
  },
  {
    id: 2,
    src: pic2,
    title: 'Asian Adventures',
    description: 'Explore vibrant cultures and ancient traditions',
    category: 'Culture'
  },
  {
    id: 3,
    src: pic3,
    title: 'European Escapes',
    description: 'Historic cities and breathtaking landscapes',
    category: 'City'
  },
  {
    id: 4,
    src: pic4,
    title: 'History Wonders',
    description: 'Discover hidden gems in your homeland',
    category: 'Nature'
  },
  {
    id: 5,
    src: pic5,
    title: 'Shores Magic',
    description: 'Overwater bungalows and premium accommodations',
    category: 'Luxury'
  },
  {
    id: 6,
    src: pic6,
    title: 'City Journey',
    description: 'Rejuvenate your mind, body and soul',
    category: 'Wellness'
  }
];

export const ResortGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Travel Gallery
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover breathtaking destinations around the world through our curated collection 
            of stunning travel photography
          </p>
        </div>

        {/* Main Slideshow */}
        <Card className="relative overflow-hidden mb-8 shadow-elegant">
          <div className="relative h-[60vh] lg:h-[70vh]">
            {/* Image Container */}
            <div className="relative w-full h-full overflow-hidden">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 transform scale-100' 
                      : 'opacity-0 transform scale-105'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                    <div className="max-w-2xl">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                        {image.category}
                      </span>
                      <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-3">
                        {image.title}
                      </h3>
                      <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </Card>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentSlide 
                  ? 'ring-2 ring-primary shadow-lg scale-105' 
                  : 'hover:scale-102'
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="aspect-video relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary/20' 
                    : 'bg-black/20 hover:bg-black/10'
                }`} />
                
                {/* Thumbnail Label */}
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="text-white text-xs font-medium truncate">
                    {image.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="fade-in-up">
            <h4 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-2">50+</h4>
            <p className="text-muted-foreground">Destinations</p>
          </div>
          <div className="fade-in-up animation-delay-200">
            <h4 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-2">15</h4>
            <p className="text-muted-foreground">Countries</p>
          </div>
          <div className="fade-in-up animation-delay-400">
            <h4 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-2">1000+</h4>
            <p className="text-muted-foreground">Happy Travelers</p>
          </div>
          <div className="fade-in-up animation-delay-600">
            <h4 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</h4>
            <p className="text-muted-foreground">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};