import { ResortNavigation } from '@/components/ResortNavigation';
import { ResortHero } from '@/components/ResortHero';
import { ResortExperience } from '@/components/ResortExperience';
import { ServicesSection } from '@/components/ServicesSection';
import { DestinationsSection } from '@/components/DestinationsSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ResortAccommodations } from '@/components/ResortAccommodations';
import { ResortActivities } from '@/components/ResortActivities';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ResortGallery } from '@/components/ResortGallery';
import { CTASection } from '@/components/CTASection';
import { ResortBooking } from '@/components/ResortBooking';
import { Footer } from '@/components/Footer';
import { Analytics } from "@vercel/analytics/react"
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Nova Buana Wisata",
    "description": "Agensi wisata mewah yang menggabungkan perjalanan dan kenyamanan, menawarkan pengalaman eksklusif dan holistik",
    "url": "https://novabuana.id",
    "logo": "https://novabuana.id/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "areaServed": ["Asia", "Europe", "Middle East", "America", "Australia"],
    "serviceType": ["Private Tours", "Consortium Tours", "Outbound Tours", "Travel Document Services"],
    "priceRange": "$$-$$$$"
  };

  return (
    <>
      <Helmet>
        <title>Nova Buana Wisata - Agen Wisata Mewah & Tour Internasional Terpercaya</title>
        <meta name="title" content="Nova Buana Wisata - Agen Wisata Murah & Tour Internasional Terpercaya" />
        <meta name="description" content="Nova Buana Wisata - Agensi wisata murah terpercaya untuk private tour, consortium tour, paket wisata luar negeri, dan pengurusan visa. Pengalaman perjalanan eksklusif dan berkelas dunia." />
        <meta name="keywords" content="agen wisata, travel agent indonesia, tour luar negeri, private tour, consortium tour, paket wisata eropa, paket wisata asia, pengurusan visa, luxury travel, outbound tour" />
        <link rel="canonical" href="https://novabuana.id" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novabuana.id" />
        <meta property="og:title" content="Nova Buana Wisata - Agen Wisata murah & Tour Internasional" />
        <meta property="og:description" content="Agensi wisata murah terpercaya untuk private tour, consortium tour, dan paket wisata luar negeri. Pengalaman perjalanan eksklusif." />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://novabuana.id" />
        <meta property="twitter:title" content="Nova Buana Wisata - Agen Wisata Murah" />
        <meta property="twitter:description" content="Agensi wisata murah terpercaya untuk private tour dan paket wisata luar negeri." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
    
    <div className="min-h-screen">
      <ResortNavigation />
      
      <main>
        <section id="hero" className="min-h-screen">
          <ResortHero />
        </section>
        
        <section id="experience" className="scroll-mt-20">
          <ResortExperience />
        </section>
        
        <section id="services" className="scroll-mt-20">
          <ServicesSection />
        </section>
        
        <section id="destinations" className="scroll-mt-20">
          <DestinationsSection />
        </section>
        
        <section id="why-choose-us" className="scroll-mt-20">
          <WhyChooseUs />
        </section>
        
        <section id="accommodations" className="scroll-mt-20">
          <ResortAccommodations />
        </section>
        
        <section id="activities" className="scroll-mt-20">
          <ResortActivities />
        </section>
        
        <section id="testimonials" className="scroll-mt-20">
          <TestimonialsSection />
        </section>
        
        <section id="gallery" className="scroll-mt-20">
          <ResortGallery />
        </section>
        
        <section id="cta" className="scroll-mt-20">
          <CTASection />
        </section>
        
        <section id="booking" className="scroll-mt-20">
          <ResortBooking />
        </section>
      </main>
      
      <Footer />
      
      <WhatsAppButton />
      <Analytics />
    </div>
    </>
  );
};

export default Index;
