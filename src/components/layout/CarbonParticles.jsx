import React, { useMemo } from 'react';

export default function CarbonParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left:     Math.random() * 100,
      size:     Math.random() * 3 + 1,
      delay:    Math.random() * 20,
      duration: Math.random() * 20 + 12,
      opacity:  Math.random() * 0.35 + 0.1,
    })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-ochre carbon-particle"
          style={{
            left:              `${p.left}%`,
            bottom:            '-8px',
            width:             `${p.size}px`,
            height:            `${p.size}px`,
            animationDelay:    `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity:           p.opacity,
          }}
        />
      ))}
    </div>
  );
}