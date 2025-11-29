import React from 'react';
import { WaveText } from './WaveText';
import HeroText from './HeroText';
import { Accordion } from './Accordion';
import { BentoCard, BentoGrid } from './ui/bento-grid';
import { FileText, Calculator, Shield, Users } from 'lucide-react';
import Logo from './Logo';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const features = [
    {
      Icon: FileText,
      name: "Company Registration",
      description: "Complete incorporation services with expert guidance",
      href: "#",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-muted/20" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Calculator,
      name: "Tax Compliance",
      description: "GST, Income Tax & TDS filing made simple",
      href: "#",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-muted/20" />,
      className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Users,
      name: "Audit Support",
      description: "Statutory & internal audits with compliance",
      href: "#",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-muted/20" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: Shield,
      name: "Financial Advisory",
      description: "Expert business guidance for growth",
      href: "#",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-muted/20" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
    }
  ];

  const faqs = [
    { question: 'How does Virtual CA work?', answer: 'AI agents handle your CA tasks with expert precision and speed.' },
    { question: 'Is it legally compliant?', answer: 'Yes, all services follow Indian regulatory standards and require CA review.' },
    { question: 'What services are covered?', answer: 'Company registration, tax filing, compliance, audits, and financial advisory.' },
    { question: 'How much does it cost?', answer: 'Transparent pricing based on service type. Contact us for detailed quotes.' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border relative z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Logo className="w-12 h-12" />
            <h1 className="text-2xl font-bold">Virtual CA</h1>
          </div>
          <button
            onClick={() => {
              console.log('Get Started clicked');
              onGetStarted();
            }}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 cursor-pointer"
            type="button"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[200vh]">
        <div className="w-full text-center">
          {/* Background Agentic text */}
          <div className="absolute inset-0 flex items-start justify-center pt-20 pointer-events-none z-0">
            <WaveText className="text-[21.375rem] font-bold text-gray-300 select-none">
              Agentic
            </WaveText>
          </div>
          
          {/* 3D Robot - Gigantic */}
          <div className="relative z-10 h-[180vh] w-full">
            <iframe 
              src="https://my.spline.design/nexbotrobotcharacterconcept-7RniRbdQavoVfOLd5yIEOyw6/" 
              frameBorder="0" 
              width="100%" 
              height="100%"
              style={{transform: 'scale(1.346)', transformOrigin: 'center'}}
            />
          </div>
          
          {/* Text below robot */}
          <HeroText onGetStarted={onGetStarted} />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Services</h3>
          <BentoGrid className="lg:grid-rows-2">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} onClick={onGetStarted} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-8">
            Join thousands of businesses using Virtual CA for their accounting needs.
          </p>
          <button
            onClick={() => {
              console.log('Lets Go clicked');
              onGetStarted();
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 text-lg cursor-pointer relative z-10 pointer-events-auto"
            type="button"
          >
            Let's Go
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Virtual CA. All services require licensed CA review for legal compliance.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;