import { Check, Wrench, Shield, Gauge, Snowflake, Truck, Car, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-garage-new.jpg';

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

          {/* Right side - Modern Logo and Services */}
          <div className="space-y-10 animate-slide-up">
            {/* Logo Section */}
            <div className="text-center lg:text-left space-y-6">
              <div className="relative">
                <h1 className="text-7xl lg:text-8xl font-black text-primary text-glow leading-none">
                  AUTO
                </h1>
                <h1 className="text-7xl lg:text-8xl font-black text-foreground leading-none -mt-4">
                  LAUKO
                </h1>
                <div className="absolute -top-2 -right-8 w-20 h-1 bg-primary rounded-full animate-glow-pulse" />
              </div>
              
              <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent p-6 rounded-2xl border border-primary/20">
                <p className="text-xl text-card-foreground font-medium">
                  Profesionální autoservis s moderním vybavením
                </p>
                <p className="text-muted-foreground mt-2">
                  ✓ Rychlé termíny  ✓ Férové ceny  ✓ Osobní přístup
                </p>
              </div>
            </div>

            {/* Modern Services Grid */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <h2 className="text-2xl font-bold text-foreground">
                  Naše specializace
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-card-foreground font-medium group-hover:text-primary transition-colors">
                      {service.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modern CTA Section */}
            <div className="bg-gradient-to-r from-card via-card/80 to-transparent p-6 rounded-2xl border border-border/50">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Připraveni vám pomoci
                  </h3>
                  <p className="text-muted-foreground">
                    Zavolejte nebo napište pro rychlou konzultaci
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-accent text-primary-foreground font-semibold animate-glow-pulse group"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +420 777 801 118
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                  >
                    Cenová nabídka
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;