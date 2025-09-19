import { Phone, Mail, MapPin } from 'lucide-react';
import logoAuto from '@/assets/logo-auto.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src={logoAuto} alt="AUTO LAUKO logo" className="h-12 w-auto" />
            <div className="text-2xl font-bold text-primary text-glow">
              AUTO LAUKO
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#pneuservis" className="text-muted-foreground hover:text-primary transition-colors">
              Služby
            </a>
            <a href="#o-nas" className="text-muted-foreground hover:text-primary transition-colors">
              O nás
            </a>
            <a href="#reference" className="text-muted-foreground hover:text-primary transition-colors">
              Reference
            </a>
            <a href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+420777801118" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+420 777 801 118</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;