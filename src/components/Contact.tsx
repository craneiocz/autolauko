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
                      Mírová 795/40<br />
                      61800 Brno-Černovice, Czechia
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
              <Button className="bg-primary hover:bg-accent text-primary-foreground font-semibold cursor-pointer">
                Objednat termín
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="card-gradient p-6 rounded-xl">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6">
              Kde nás najdete
            </h3>
            <div className="bg-muted rounded-lg h-[400px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.8951194395787!2d16.659347776449873!3d49.175850771382965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129450e7c31ccf%3A0x8e8b8b8b8b8b8b8b!2zTcOtcm92w6EgNzk1LzQwLCA2MTggMDAgQnJuby3EjGVybm92aWNlLCBDemVjaGlh!5e0!3m2!1sen!2scz!4v1679123456789!5m2!1sen!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AUTO LAUKO - Mírová 795/40, Brno-Černovice"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;