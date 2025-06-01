"use client";

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Gamepad2, Mail, MapPin, Phone, Twitter, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Games', href: '#games' },
  { name: 'About', href: '#about' },
  { name: 'News', href: '#news' },
  { name: 'Careers', href: '#careers' },
  { name: 'Support', href: '#support' },
];

const gameLinks = [
  { name: 'Cyber Nexus', href: '#' },
  { name: 'Quantum Wars', href: '#' },
  { name: 'Mystic Realms', href: '#' },
  { name: 'Neon Racer', href: '#' },
  { name: 'Shadow Protocol', href: '#' },
  { name: 'Galactic Empire', href: '#' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' },
  { name: 'DMCA', href: '#' },
];

export function Footer() {
  console.log("Footer component rendered");

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-space-black to-charcoal-gray border-t border-electric-blue/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-vibrant-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <div className="h-16 w-auto">
                  <img 
                    src="https://assets.macaly-user-data.dev/iaw0i8xyhqqkvh1gu1w0r2ia/wf9i6qxq00yy9k9k1z71pwoo/Ly_gRM3RZrUU_0FlJ_q9J/img-20250524-wa-0012-photoroom.png" 
                    alt="AVXIRA GAMES Logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">
                Crafting immersive gaming experiences that push the boundaries of imagination. 
                Join millions of players in our epic gaming universe.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-electric-blue" />
                  <span>infobabe09@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-electric-blue" />
                  <span>+1 (555) 123-GAME</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-electric-blue" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-charcoal-gray border border-electric-blue/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-electric-blue hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Social link clicked:", social.label);
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-display font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-electric-blue transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Quick link clicked:", link.name);
                        if (link.href.startsWith('#')) {
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Games */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-display font-bold text-white mb-6">Our Games</h4>
              <ul className="space-y-3">
                {gameLinks.map((game) => (
                  <li key={game.name}>
                    <a
                      href={game.href}
                      className="text-gray-400 hover:text-electric-blue transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Game link clicked:", game.name);
                      }}
                    >
                      {game.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-display font-bold text-white mb-6">Stay Updated</h4>
              <p className="text-gray-400 mb-4">
                Get the latest news, updates, and exclusive content delivered to your inbox.
              </p>
              
              <div className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-charcoal-gray border border-electric-blue/30 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue"
                    onFocus={() => console.log("Newsletter email input focused")}
                  />
                  <Button 
                    className="px-6 py-3 bg-electric-blue text-space-black hover:bg-vibrant-purple hover:text-white rounded-l-none transition-all duration-300"
                    onClick={() => console.log("Newsletter subscription attempted")}
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>

              {/* Download App */}
              <div className="mt-6 space-y-3">
                <p className="text-sm text-gray-400 font-semibold">Download Our App</p>
                <div className="flex space-x-3">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-space-black"
                    onClick={() => console.log("Download iOS app clicked")}
                  >
                    iOS App
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-space-black"
                    onClick={() => console.log("Download Android app clicked")}
                  >
                    Android
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Separator className="bg-electric-blue/20" />

        {/* Bottom Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 AVXIRA Games. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Crafting the future of gaming, one pixel at a time.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-electric-blue transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Legal link clicked:", link.name);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}