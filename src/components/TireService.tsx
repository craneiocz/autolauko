import { Car, Calendar, Shield, Wrench, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Car,
    title: 'Přezutí pneumatik',
    description: 'Rychlé a profesionální přezutí letních/zimních pneumatik',
    features: ['Vyvážení kol', 'Kontrola tlaku', 'Vizuální kontrola'],
  },
  {
    icon: Shield,
    title: 'Opravy pneumatik',
    description: 'Opravy defektů a poškození pneumatik pomocí moderních technologií',
    features: ['Bezdušové pneumatiky', 'Záplaty', 'Vulkanizace'],
  },
  {
    icon: Wrench,
    title: 'Geometrie kol',
    description: 'Nastavení geometrie pro optimální jízdní vlastnosti a životnost pneumatik',
    features: ['3D laserová geometrie', 'Nastavení sbíhavosti', 'Kontrola podvozku'],
  },
  {
    icon: Calendar,
    title: 'Skladování pneumatik',
    description: 'Bezpečné skladování pneumatik v kontrolovaném prostředí',
    features: ['Čisté prostory', 'Značení pneumatik', 'Evidence skladu'],
  },
];

const TireService = () => {
  return (
    <section id="pneuservis" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Car className="w-10 h-10 text-primary" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Pneuservis
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Komplexní péče o vaše pneumatiky. Od přezutí až po skladování – vše na jednom místě s garancí kvality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative p-8">
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-card-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-card via-card/80 to-transparent p-8 rounded-2xl border border-border/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                Potřebujete pneuservis?
              </h3>
              <p className="text-muted-foreground">
                Objednejte si termín nebo se informujte o dostupnosti služeb
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-accent text-primary-foreground font-semibold group cursor-pointer"
            >
              <Car className="w-4 h-4 mr-2" />
              Objednat pneuservis
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TireService;