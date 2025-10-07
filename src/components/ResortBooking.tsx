import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CalendarDays, Users, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const ResortBooking = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    accommodation: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
              }, index * 150);
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.checkIn || !formData.checkOut || !formData.guests || !formData.accommodation || !formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('reservations')
        .insert({
          check_in_date: formData.checkIn,
          check_out_date: formData.checkOut,
          guests: formData.guests,
          accommodation_type: formData.accommodation,
          guest_name: formData.name,
          guest_email: formData.email,
          guest_phone: formData.phone,
          special_requests: formData.message || null,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Reservation Submitted!",
        description: "Your reservation request has been received. We'll contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: '',
        accommodation: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting reservation:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your reservation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="fade-in-up flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-primary"></div>
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Reservations
            </span>
            <div className="w-12 h-px bg-primary"></div>
          </div>
          
          <h2 className="fade-in-up font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Begin Your
            <span className="block text-primary italic font-light mt-2">
              Escape
            </span>
          </h2>
          
          <p className="fade-in-up text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Izinkan kami merancang pengalaman tak terlupakan yang disesuaikan dengan keinginan Anda. 
            Tim kami siap mewujudkan liburan impian Anda menjadi kenyataan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="fade-in-left shadow-luxury border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-8">
                <CardTitle className="font-serif text-2xl lg:text-3xl text-foreground">
                  Reserve Your Tour
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Dates and Guests */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkIn" className="text-sm font-medium">Start Tour</Label>
                      <div className="relative">
                        <Input
                          id="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={(e) => handleInputChange('checkIn', e.target.value)}
                          className="pl-10"
                        />
                        <CalendarDays className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="checkOut" className="text-sm font-medium">End Tour</Label>
                      <div className="relative">
                        <Input
                          id="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={(e) => handleInputChange('checkOut', e.target.value)}
                          className="pl-10"
                        />
                        <CalendarDays className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-sm font-medium">Guests</Label>
                      <div className="relative">
                        <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                          <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3">3 Guests</SelectItem>
                            <SelectItem value="4">4 Guests</SelectItem>
                            <SelectItem value="5">5+ Guests</SelectItem>
                          </SelectContent>
                        </Select>
                        <Users className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Accommodation Type */}
                  <div className="space-y-2">
                    <Label htmlFor="accommodation" className="text-sm font-medium">Preferred Services</Label>
                    <Select value={formData.accommodation} onValueChange={(value) => handleInputChange('accommodation', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose services" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hotel">Private Tour</SelectItem>
                        <SelectItem value="motel">Consortium Tour</SelectItem>
                        <SelectItem value="documents">Travel Documents</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                      <div className="relative">
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter your phone number"
                          className="pl-10"
                        />
                        <Phone className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email address"
                        className="pl-10"
                      />
                      <Mail className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Services Request</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your request, such as hongkong tour, Franch Tour, australia tour or country visa preferences..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Request Reservation"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Card */}
            <Card className="fade-in-right shadow-luxury border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Taman Meruya Ilir Blok D1 B No.1<br />
                      Kembangan<br />
                      Jakarta Barat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">
                      +62 8776 499 4950<br />
                      +62 8155 394 2464
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      hoedhud@gmail.com<br />
                      info@novabuana.co.id
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Legalty</h4>
                    <p className="text-sm text-muted-foreground">
                      Kemkumham Reg No<br />
                      AHU-066058.AH.01.30 Tahun 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Concierge Services */}
            <Card className="fade-in-right shadow-luxury border-0 ocean-gradient text-white">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  AI Tour Itinerary
                </h3>
                <p className="text-sm text-white/90 leading-relaxed mb-4">
                  membuat rencana perjalanan otomatis sesuai minat dan waktu pengguna, 
                  menghadirkan pengalaman wisata efisien, personal, dan mudah digunakan.
                </p>
                <Button variant="minimal" size="lg" className="w-full">
                  Create Itinerary
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </section>
  );
};