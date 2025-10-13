import { Shield, Award, HeadphonesIcon, ThumbsUp, Clock, Globe } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Berpengalaman',
      description: 'Lebih dari 10 tahun melayani perjalanan wisata dengan ribuan klien puas'
    },
    {
      icon: Shield,
      title: 'Terpercaya',
      description: 'Terdaftar resmi dengan lisensi lengkap dan asuransi perjalanan'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support 24/7',
      description: 'Tim customer service siap membantu Anda kapan saja selama perjalanan'
    },
    {
      icon: ThumbsUp,
      title: 'Best Price',
      description: 'Harga kompetitif dengan kualitas layanan premium tanpa biaya tersembunyi'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Jadwal keberangkatan yang fleksibel sesuai dengan waktu Anda'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Jaringan partner di seluruh dunia untuk pengalaman wisata terbaik'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background with Ocean Gradient */}
      <div className="absolute inset-0 ocean-gradient opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-white/50"></div>
            <span className="text-sm uppercase tracking-wider text-white/90 font-medium">
              Keunggulan Kami
            </span>
            <div className="w-12 h-px bg-white/50"></div>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Mengapa Memilih Nova Buana Wisata?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Komitmen kami adalah memberikan pengalaman perjalanan terbaik dengan pelayanan profesional
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-white/40"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-500">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};