import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Jak dlouho trvá běžná oprava vozidla?',
    answer: 'Doba opravy závisí na typu závady. Menší opravy obvykle dokončujeme během 1-2 dnů, složitější opravy mohou trvat 3-5 dnů. Vždy vás předem informujeme o odhadované době opravy.'
  },
  {
    question: 'Poskytujete záruku na opravy?',
    answer: 'Ano, na všechny naše opravy poskytujeme záruku. Záruka na práci je 12 měsíců, na náhradní díly poskytujeme záruku dle výrobce.'
  },
  {
    question: 'Můžu si u vás nechat opravit elektromobil nebo hybrid?',
    answer: 'Ano, náš tým má certifikaci pro práci s hybridními a elektrickými vozidly. Disponujeme speciálním vybavením pro diagnostiku a opravu těchto vozidel.'
  },
  {
    question: 'Jak si můžu objednat termín?',
    answer: 'Nejjednodušeji nás kontaktujte telefonicky na +420 777 801 118. Pracujeme podle objednávek, takže je vhodné si termín domluvit předem.'
  },
  {
    question: 'Převezmete můj vůz přímo od STK?',
    answer: 'Ano, pokud váš vůz neprošel STK, můžeme si ho vyzvednout přímo ze stanice technické kontroly a provést potřebné opravy.'
  },
  {
    question: 'Máte náhradní vozidlo?',
    answer: 'Pro delší opravy je možné domluvit náhradní vozidlo. Kontaktujte nás předem a domluvíme podmínky.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-6">
            Často kladené otázky
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Odpovědi na nejčastější otázky o našich službách
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="card-gradient rounded-xl border border-border/50 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-card-foreground pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-border/50 mb-4" />
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* JSON-LD structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </div>
    </section>
  );
};

export default FAQ;