import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Pavel Novák',
    text: 'Výborný servis, rychlé a kvalitní opravy. Mohu jen doporučit!',
    rating: 5,
    vehicle: 'Škoda Octavia'
  },
  {
    name: 'Marie Svobodová',
    text: 'Profesionální přístup, férové ceny a vždy dodržený termín. Už několik let jim svěřuji své auto.',
    rating: 5,
    vehicle: 'Volkswagen Golf'
  },
  {
    name: 'Tomáš Procházka',
    text: 'Skvělá diagnostika, našli závadu kterou jinde neodhalili. Doporučujem všem!',
    rating: 5,
    vehicle: 'Audi A4'
  },
  {
    name: 'Jana Králová',
    text: 'Milý personál, vysvětlí vše srozumitelně a ceny jsou rozumné. Velmi spokojená.',
    rating: 5,
    vehicle: 'Ford Focus'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reference" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Co říkají naši zákazníci
          </h2>
          <p className="text-xl text-muted-foreground">
            Přečtěte si hodnocení spokojených zákazníků
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="card-gradient p-8 rounded-2xl">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-card-foreground text-center mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-semibold text-primary text-lg">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-muted-foreground">
                {testimonials[currentIndex].vehicle}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-card/80 backdrop-blur border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-card/80 backdrop-blur border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;