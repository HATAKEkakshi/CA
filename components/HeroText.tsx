import React from 'react';
import TextType from './TextType';
import ScrollReveal from './ScrollReveal';

interface HeroTextProps {
  onGetStarted: () => void;
}

const HeroText: React.FC<HeroTextProps> = ({ onGetStarted }) => {
  return (
    <>
      {/* Partition */}
      <div className="w-full h-px bg-border mt-96"></div>
      
      {/* Services Section */}
      <div className="relative z-10 px-4 py-20 bg-card/50 backdrop-blur-sm border-t border-border">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and Button */}
          <div className="text-center">
            <TextType 
              text={["AI Chartered Accountant", "Agentic CA Services", "Smart Accounting"]} 
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              className="text-5xl font-bold mb-8"
            />
            

          </div>
          
          {/* Right side - Content */}
          <div className="text-left">
            <p className="text-lg text-muted-foreground mb-6">
              Complete CA services through specialized AI agents. Fast, accurate, and compliant with Indian regulations.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-base">Company Registration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-base">Tax Filing & GST</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-base">Compliance Management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-base">Audit Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroText;