import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">AUTO LAUKÓ</h3>
            <p className="text-muted-foreground mb-4">
              Profesionální autoservis s moderním vybavením a osobním přístupem ke každému zákazníkovi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Rychlé odkazy</h4>
            <nav className="space-y-2">
              <a href="#pneuservis" className="block text-muted-foreground hover:text-primary transition-colors">
                Služby
              </a>
              <a href="#o-nas" className="block text-muted-foreground hover:text-primary transition-colors">
                O nás
              </a>
              <a href="#reference" className="block text-muted-foreground hover:text-primary transition-colors">
                Reference
              </a>
              <a href="#kontakt" className="block text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+420777801118" className="text-muted-foreground hover:text-primary transition-colors">
                  +420 777 801 118
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:servis@autolauko.cz" className="text-muted-foreground hover:text-primary transition-colors">
                  servis@autolauko.cz
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  Mírová 795/40, Brno-Černovice
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 AUTO LAUKÓ. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;