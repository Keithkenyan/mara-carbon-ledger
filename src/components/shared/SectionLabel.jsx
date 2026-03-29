import React from 'react';

export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`font-tech text-[9px] tracking-[0.35em] text-ochre uppercase mb-4 ${className}`}>
      {children}
    </p>
  );
}