import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`${className} flex items-center justify-center font-bold text-2xl text-foreground`}>
      VC
    </div>
  );
};

export default Logo;