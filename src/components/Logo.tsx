import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export default function Logo({ className = '', size = 'md', showTagline = true }: LogoProps) {
  const sizeClasses = {
    sm: {
      container: 'h-12 w-12',
      text: 'text-lg',
      sub: 'text-[9px]',
      titleGap: 'leading-none'
    },
    md: {
      container: 'h-16 w-16',
      text: 'text-2xl',
      sub: 'text-[11px]',
      titleGap: 'leading-tight'
    },
    lg: {
      container: 'h-28 w-28',
      text: 'text-4xl',
      sub: 'text-xs',
      titleGap: 'leading-normal'
    }
  };

  const selectedSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Elegantly Cropped Logo Emblem Masked to hide black letterbox bounds */}
      <div className={`${selectedSize.container} relative overflow-hidden rounded-full bg-white shadow-xs border border-brand-cream-dark flex items-center justify-center`}>
        <img
          src="https://lh3.googleusercontent.com/d/1T2ScOt0AUc2AijRA_qj9S-knQOJIazTq"
          alt="Doce Graça Emblem"
          className="w-full h-full object-cover scale-[1.14] transition-transform duration-500 hover:scale-[1.25]"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <h1 
          className={`font-serif font-black ${selectedSize.text} tracking-wide text-brand-brown-deep ${selectedSize.titleGap}`}
          style={{ letterSpacing: '0.04em' }}
        >
          Doce Graça
        </h1>
        {showTagline && (
          <span 
            className={`font-sans font-semibold tracking-widest text-[#8C6239] transition-colors duration-300 hover:text-brand-gold ${selectedSize.sub}`}
            style={{ fontSize: size === 'lg' ? '12px' : '9px', letterSpacing: '0.22em', uppercase: 'true' }}
          >
            CONFEITARIA ARTESANAL
          </span>
        )}
      </div>
    </div>
  );
}
