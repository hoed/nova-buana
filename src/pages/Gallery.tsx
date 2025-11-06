import { useState } from 'react';
import { ResortNavigation } from '@/components/ResortNavigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from 'react-helmet';
import pic1 from '@/assets/6249018721389627511.jpg';
import pic2 from '@/assets/6249018721389627512.jpg';
import pic3 from '@/assets/6249018721389627513.jpg';
import pic4 from '@/assets/6249018721389627515.jpg';
import pic5 from '@/assets/6249018721389627516.jpg';
import pic6 from '@/assets/6249018721389627517.jpg';
import pic7 from '@/assets/6249018721389627518.jpg';
import pic8 from '@/assets/6249018721389627519.jpg';
import pic9 from '@/assets/6249018721389627520.jpg';
import pic10 from '@/assets/gallery-hongkong-harbor.jpg';
import pic11 from '@/assets/gallery-paris-louvre.jpg';
import pic12 from '@/assets/gallery-amsterdam-canal.jpg';
import pic13 from '@/assets/gallery-group-temple.jpg';
import pic14 from '@/assets/gallery-tokyo-temple.jpg';
import pic15 from '@/assets/gallery-dubai-museum.jpg';

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
  },
  {
    id: 10,
    src: pic10,
    title: 'Hong Kong Harbor',
    description: 'Victoria Harbour skyline and Star Ferry experience',
    category: 'City'
  },
  {
    id: 11,
    src: pic11,
    title: 'Paris Louvre',
    description: 'Iconic glass pyramid and French culture',
    category: 'Culture'
  },
  {
    id: 12,
    src: pic12,
    title: 'Amsterdam Canals',
    description: 'Historic canal houses and Dutch charm',
    category: 'City'
  },
  {
    id: 13,
    src: pic13,
    title: 'Temple Adventures',
    description: 'Southeast Asian cultural exploration',
    category: 'Culture'
  },
  {
    id: 14,
    src: pic14,
    title: 'Tokyo Temples',
    description: 'Traditional Japanese heritage sites',
    category: 'Culture'
  },
  {
    id: 15,
    src: pic15,
    title: 'Dubai Museum',
    description: 'Arabian heritage and historic architecture',
    category: 'Culture'
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Nova Buana Wisata Travel Gallery",
    "description": "Koleksi foto perjalanan dari berbagai destinasi wisata di seluruh dunia",
    "url": "https://novabuana.com/gallery"
  };

  return (
    <>
      <Helmet>
        <title>Galeri Foto Perjalanan - Nova Buana Wisata | Destinasi Wisata Dunia</title>
        <meta name="title" content="Galeri Foto Perjalanan - Nova Buana Wisata" />
        <meta name="description" content="Jelajahi koleksi foto perjalanan Nova Buana Wisata dari berbagai destinasi eksotis: Asia, Eropa, Timur Tengah, dan destinasi menarik lainnya. Inspirasi perjalanan Anda dimulai di sini." />
        <meta name="keywords" content="galeri wisata, foto perjalanan, destinasi wisata, travel photography, wisata asia, wisata eropa, inspirasi liburan" />
        <link rel="canonical" href="https://novabuana.com/gallery" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novabuana.com/gallery" />
        <meta property="og:title" content="Galeri Foto Perjalanan - Nova Buana Wisata" />
        <meta property="og:description" content="Koleksi foto perjalanan dari berbagai destinasi wisata di seluruh dunia." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <ResortNavigation />
      
      {/* Hero Section */}
      <header>
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${pic1})`,
              filter: 'blur(8px)',
              transform: 'scale(1.1)',
            }}
            role="img"
            aria-label="Travel destination gallery hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-background" />
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Galeri Foto Perjalanan
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Jelajahi koleksi foto perjalanan menakjubkan dari berbagai destinasi di seluruh dunia
            </p>
          </div>
        </section>
      </header>

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
                    alt={`${image.title} - ${image.description} travel photography`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width="600"
                    height="450"
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
    </>
  );
};

export default Gallery;
