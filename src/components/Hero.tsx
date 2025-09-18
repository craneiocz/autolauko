import { Check, Wrench, Shield, Gauge, Snowflake, Truck, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-garage.jpg';

const services = [
  { icon: Wrench, text: 'Servis vozidel' },
  { icon: Shield, text: 'Přípravy na STK' },
  { icon: Gauge, text: 'Moderní diagnostika' },
  { icon: Car, text: 'Pneuservis' },
  { icon: Snowflake, text: 'Klimatizace' },
  { icon: Truck, text: 'Montáž tažných zařízení' },
];

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={heroImage} 
                alt="AUTO LAUKO autoservis - profesionální opravy vozidel"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>

          {/* Right side - Logo and Services */}
          <div className="space-y-8 animate-slide-up">
            {/* Logo */}
            <div className="text-center lg:text-left">
              <h1 className="text-6xl lg:text-7xl font-bold text-primary text-glow mb-4">
                AUTO
              </h1>
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground mb-6">
                LAUKO
              </h1>
              <p className="text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
                Profesionální autoservis s moderním vybavením a osobním přístupem
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Naše služby:
              </h2>
              <div className="grid gap-3">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="service-item animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                      <service.icon className="w-4 h-4" />
                    </div>
                    <span className="text-card-foreground font-medium">
                      {service.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground font-semibold animate-glow-pulse">
                Objednat servis
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Kontaktovat nás
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;