import { Phone, Mail, Globe, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="kontakt" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-6">
            Kontaktujte nás
          </h2>
          <p className="text-xl text-muted-foreground">
            Těšíme se na vaši návštěvu nebo telefonát
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-gradient p-6 rounded-xl">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                Kontaktní údaje
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Telefon</div>
                    <a href="tel:+420777801118" className="text-primary hover:text-accent transition-colors">
                      +420 777 801 118
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">E-mail</div>
                    <a href="mailto:servis@autolauko.cz" className="text-primary hover:text-accent transition-colors">
                      servis@autolauko.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Web</div>
                    <a href="https://www.autolauko.cz" className="text-primary hover:text-accent transition-colors">
                      www.autolauko.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Adresa</div>
                    <div className="text-muted-foreground">
                      Průmyslová 123<br />
                      150 00 Praha 5
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Otevírací doba</div>
                    <div className="text-muted-foreground">
                      Po - Pá: 7:00 - 17:00<br />
                      So: 8:00 - 12:00<br />
                      Ne: Zavřeno
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-accent text-primary-foreground font-semibold">
                Objednat termín
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Nezávazná cenová nabídka
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="card-gradient p-6 rounded-xl">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6">
              Kde nás najdete
            </h3>
            <div className="bg-muted rounded-lg h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interaktivní mapa autoservisu<br />
                  Průmyslová 123, Praha 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;