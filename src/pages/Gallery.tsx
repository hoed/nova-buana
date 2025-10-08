import { useState } from 'react';
import { ResortNavigation } from '@/components/ResortNavigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";
import pic1 from '@/assets/6249018721389627511.jpg';
import pic2 from '@/assets/6249018721389627512.jpg';
import pic3 from '@/assets/6249018721389627513.jpg';
import pic4 from '@/assets/6249018721389627515.jpg';
import pic5 from '@/assets/6249018721389627516.jpg';
import pic6 from '@/assets/6249018721389627517.jpg';
import pic7 from '@/assets/6249018721389627518.jpg';
import pic8 from '@/assets/6249018721389627519.jpg';
import pic9 from '@/assets/6249018721389627520.jpg';

const galleryImages = [
  {
    id: 1,
    src: pic1,
    title: 'Religious Tourism',
    description: 'Sacred temples and spiritual journeys',
    category: 'Culture'
  },
  {
    id: 2,
    src: pic2,
    title: 'Beach Paradise',
    description: 'Crystal clear waters and white sandy beaches',
    category: 'Beach'
  },
  {
    id: 3,
    src: pic3,
    title: 'Mountain Retreat',
    description: 'Breathtaking highland landscapes',
    category: 'Nature'
  },
  {
    id: 4,
    src: pic4,
    title: 'Asian Adventures',
    description: 'Explore vibrant cultures and traditions',
    category: 'Culture'
  },
  {
    id: 5,
    src: pic5,
    title: 'European Elegance',
    description: 'Historic cities and architectural marvels',
    category: 'City'
  },
  {
    id: 6,
    src: pic6,
    title: 'City Lights',
    description: 'Modern urban exploration',
    category: 'City'
  },
  {
    id: 7,
    src: pic7,
    title: 'Coastal Luxury',
    description: 'Premium oceanfront experiences',
    category: 'Luxury'
  },
  {
    id: 8,
    src: pic8,
    title: 'Cultural Heritage',
    description: 'Ancient traditions and monuments',
    category: 'Culture'
  },
  {
    id: 9,
    src: pic9,
    title: 'Natural Wonders',
    description: 'Stunning landscapes and wildlife',
    category: 'Nature'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Culture', 'Beach', 'Nature', 'City', 'Luxury'];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ResortNavigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${pic1})`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-background" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Photo Gallery
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Explore our collection of stunning travel photography from around the world
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "hero" : "outline"}
                onClick={() => setFilter(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-elegant"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                      {image.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">500+</h4>
              <p className="text-muted-foreground">Photos</p>
            </div>
            <div>
              <h4 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">50+</h4>
              <p className="text-muted-foreground">Destinations</p>
            </div>
            <div>
              <h4 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">15</h4>
              <p className="text-muted-foreground">Countries</p>
            </div>
            <div>
              <h4 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">1000+</h4>
              <p className="text-muted-foreground">Happy Travelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div className="max-w-6xl w-full">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="text-center mt-6 text-white">
              <h3 className="font-serif text-2xl font-bold mb-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-white/80">{filteredImages[selectedImage].description}</p>
              <p className="text-sm text-white/60 mt-2">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Analytics />
    </div>
  );
};

export default Gallery;
