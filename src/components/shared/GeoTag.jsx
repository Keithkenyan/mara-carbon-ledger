import React from 'react';

export default function GeoTag({ lat, lng, alt, className = '' }) {
  return (
    <span className={`font-tech text-[9px] tracking-[0.22em] text-ochre/50 uppercase ${className}`}>
      {lat} · {lng}{alt ? ` · ${alt}` : ''}
    </span>
  );
}