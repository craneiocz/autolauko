import { Award, Users, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Profesionalita',
    description: 'Certifikovaní technici s dlouholetými zkušenostmi'
  },
  {
    icon: Users,
    title: 'Osobní přístup',
    description: 'Každému zákazníkovi se věnujeme individuálně'
  },
  {
    icon: Clock,
    title: 'Rychlost',
    description: 'Snažíme se dodržovat domluvené termíny oprav'
  },
  {
    icon: Star,
    title: 'Kvalita',
    description: 'Používáme pouze kvalitní náhradní díly a materiály'
  }
];

const About = () => {
  return (
    <section id="o-nas" className="section-padding bg-card">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-6">
            O našem autoservisu
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            AUTO LAUKO je moderní autoservis zaměřený na komplexní péči o vaše vozidlo. 
            Nabízíme profesionální služby s důrazem na kvalitu, rychlost a osobní přístup 
            ke každému zákazníkovi. Naše dílna je vybavena nejmodernější diagnostikou 
            a náš tým má bohaté zkušenosti s opravami všech značek vozidel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-gradient p-6 rounded-xl text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;