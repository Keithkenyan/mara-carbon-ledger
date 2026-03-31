import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navContent = useSiteContent('nav');
  const images = useSiteContent('images');
  const links = navContent.links;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] lg:px-[8vw] py-5 transition-all duration-500 ${
          scrolled ? 'bg-basalt/90 backdrop-blur-md border-b border-white/5' : ''
        }`}
      >
        {/* Logo */}
        <Link to="/" className="relative z-50 flex items-center gap-3" aria-label="One Mara Carbon – Home">
          <img
            src={images.logo}
            alt="One Mara Carbon"
            className="h-10 w-auto"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-ether text-lg tracking-[0.1em] uppercase">One Mara Carbon</span>
            <span className="font-tech text-[9px] tracking-[0.35em] uppercase mt-0.5" style={{ color: '#B5A14A' }}>Project</span>
          </div>
        </Link>

        {/* Menu toggle */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          className="relative z-50 flex items-center gap-2 font-tech text-[10px] tracking-[0.25em] uppercase text-ether/70 hover:text-ochre transition-colors"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          {open ? 'Close' : 'Menu'}
        </button>
      </header>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex items-center justify-center"
            style={{ background: 'rgba(18,20,18,0.97)', backdropFilter: 'blur(24px)' }}
          >
            <nav className="flex flex-col items-center gap-6 md:gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link
                    to={link.path}
                    className={`font-display block text-4xl md:text-6xl lg:text-7xl tracking-tight transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-ochre'
                        : 'text-ether hover:text-ochre'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Geo tag bottom */}
            <div className="absolute bottom-10 left-[8vw] font-tech text-[9px] tracking-[0.25em] text-white/25 uppercase">
              −1°30′S &nbsp;35°00′E &nbsp;·&nbsp; Mara Ecosystem, Kenya &nbsp;·&nbsp; Est. 2019
            </div>

            {/* CTA bottom right */}
            <div className="absolute bottom-10 right-[8vw]">
              <Link
                to={navContent.ctaPath}
                className="font-tech text-[10px] tracking-[0.2em] uppercase px-6 py-3 border border-ochre/50 text-ochre hover:bg-ochre hover:text-basalt transition-all duration-300"
              >
                {navContent.ctaLabel}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}