"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Gamepad2, Home, Users, BookOpen, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log("Navigation component mounted");
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      console.log("Scroll position:", window.scrollY, "isScrolled:", isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Games', href: '#games', icon: Gamepad2 },
    { name: 'About', href: '#about', icon: Users },
    { name: 'News', href: '#news', icon: BookOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  console.log("Rendering navigation, isOpen:", isOpen, "scrolled:", scrolled);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-space-black/80 backdrop-blur-cyber shadow-cyber' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-12 w-auto">
              <img 
                src="https://assets.macaly-user-data.dev/iaw0i8xyhqqkvh1gu1w0r2ia/wf9i6qxq00yy9k9k1z71pwoo/Ly_gRM3RZrUU_0FlJ_q9J/img-20250524-wa-0012-photoroom.png" 
                alt="AVXIRA GAMES Logo"
                className="h-full w-auto object-contain"
                onLoad={() => console.log("Logo loaded successfully")}
                onError={() => console.log("Logo failed to load")}
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white hover:text-electric-blue transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Navigating to:", item.href);
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
              </motion.a>
            ))}
            <Button 
              className="cyber-button"
              onClick={() => console.log("Download game clicked")}
            >
              Download Game
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-electric-blue"
            onClick={() => {
              console.log("Mobile menu toggled:", !isOpen);
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-space-black/95 backdrop-blur-cyber border-t border-electric-blue/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-white hover:text-electric-blue transition-colors duration-200 py-2"
                    whileHover={{ x: 10 }}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("Mobile navigation to:", item.href);
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      setIsOpen(false);
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                );
              })}
              <Button className="cyber-button w-full mt-4">
                Download Game
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}