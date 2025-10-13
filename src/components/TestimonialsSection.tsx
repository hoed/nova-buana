import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ibu Siti Nurhaliza',
      location: 'Jakarta',
      rating: 5,
      tour: 'European Highlights Tour',
      text: 'Pengalaman tour ke Eropa bersama Nova Buana sangat memuaskan! Guide nya sangat profesional dan ramah, semua sudah diatur dengan sempurna. Pasti akan pakai jasa mereka lagi untuk tour berikutnya!',
      date: 'Januari 2025'
    },
    {
      name: 'Bapak Ahmad Rizki',
      location: 'Surabaya',
      rating: 5,
      tour: 'Umroh Plus Turkey',
      text: 'Alhamdulillah, perjalanan umroh plus Turkey sangat berkesan. Pelayanan memuaskan dari awal hingga akhir, hotel dan transportasi nyaman. Terima kasih Nova Buana Wisata!',
      date: 'Desember 2024'
    },
    {
      name: 'Ibu Diana Putri',
      location: 'Bandung',
      rating: 5,
      tour: 'Japan Cherry Blossom',
      text: 'Trip ke Jepang saat musim sakura benar-benar impian saya! Nova Buana membuat semuanya jadi mudah dan menyenangkan. Itinerary nya bagus dan waktu nya pas. Recommended banget!',
      date: 'Maret 2024'
    },
    {
      name: 'Bapak Rudi Hartono',
      location: 'Medan',
      rating: 5,
      tour: 'Private Tour Bali',
      text: 'Private tour ke Bali untuk keluarga sangat fleksibel dan menyenangkan. Driver dan guide sangat membantu, destinasi yang dikunjungi sesuai request. Harga juga reasonable!',
      date: 'November 2024'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-primary"></div>
            <span className="text-sm uppercase tracking-wider text-primary font-medium">
              Testimoni
            </span>
            <div className="w-12 h-px bg-primary"></div>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Kata Mereka Tentang Kami
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10 shadow-luxury">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-start mb-6">
                <Quote className="w-12 h-12 text-primary/30 -mt-2" />
              </div>

              <div className="mb-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed mb-6 italic">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Tour Info */}
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="text-sm font-medium text-primary">
                    {testimonials[activeIndex].tour}
                  </span>
                </div>

                {/* Author Info */}
                <div>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-1">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[activeIndex].location} • {testimonials[activeIndex].date}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full hover:bg-primary hover:text-white transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex 
                          ? 'bg-primary w-8' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full hover:bg-primary hover:text-white transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};