"use client";

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log("Hero section mounted");
    if (videoRef.current) {
      console.log("Video element found, attempting to play");
      videoRef.current.play().catch(err => {
        console.log("Video autoplay failed:", err);
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/60 via-space-black/40 to-space-black/80" />
        <div className="absolute inset-0 bg-neon-glow" />
      </div>

      {/* Floating Particles */}
      <div className="particles absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Logo Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-electric-blue/20 to-vibrant-purple/20 rounded-full border border-electric-blue/30 backdrop-blur-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-electric-blue font-semibold tracking-wider text-sm">
              NEXT-GEN GAMING STUDIO
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="section-title text-6xl md:text-8xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            AVXIRA
            <br />
            <span className="neon-text">GAMES</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Crafting immersive gaming experiences that push the boundaries of imagination. 
            Welcome to the future of interactive entertainment.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button 
              size="lg" 
              className="cyber-button text-lg px-12 py-4 group"
              onClick={() => {
                console.log("Play now button clicked");
                document.querySelector('#games')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Play Now
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-12 py-4 border-white text-white hover:bg-white hover:text-space-black transition-all duration-300"
              onClick={() => {
                console.log("Download game button clicked");
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Game
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {[
              { label: 'Games Released', value: '12+' },
              { label: 'Active Players', value: '2.5M+' },
              { label: 'Awards Won', value: '15+' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-electric-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button 
          className="text-white hover:text-electric-blue transition-colors"
          onClick={() => {
            console.log("Scroll indicator clicked");
            document.querySelector('#games')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
}