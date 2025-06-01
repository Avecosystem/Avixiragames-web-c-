"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gamepad2, Users, Trophy, Rocket, Code, Palette, Headphones, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Gamepad2,
    title: "Innovative Gameplay",
    description: "Pushing the boundaries of interactive entertainment with cutting-edge mechanics."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Building games with our passionate community at the heart of development."
  },
  {
    icon: Trophy,
    title: "Award Winning",
    description: "Recognized globally for excellence in game design and player experience."
  },
  {
    icon: Rocket,
    title: "Next-Gen Technology",
    description: "Leveraging the latest in gaming technology for immersive experiences."
  }
];

const team = [
  {
    icon: Code,
    role: "Development",
    description: "Expert programmers crafting seamless gaming experiences",
    count: "25+"
  },
  {
    icon: Palette,
    role: "Art & Design",
    description: "Visionary artists creating stunning game worlds",
    count: "18+"
  },
  {
    icon: Headphones,
    role: "Audio",
    description: "Sound engineers delivering immersive audio landscapes",
    count: "8+"
  },
  {
    icon: Target,
    role: "QA & Testing",
    description: "Quality assurance ensuring polished gameplay",
    count: "12+"
  }
];

export function AboutSection() {
  console.log("About section rendered");

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title mb-6">About AVXIRA</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Founded with a vision to revolutionize gaming, AVXIRA Games combines cutting-edge technology 
          with creative storytelling to deliver unforgettable gaming experiences.
        </p>
      </motion.div>

      {/* Company Story */}
      <motion.div
        className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <Badge className="bg-vibrant-purple text-white mb-4">Our Story</Badge>
          <h3 className="text-3xl font-display font-bold mb-6 text-white">
            Crafting the Future of Gaming
          </h3>
          <div className="space-y-4 text-gray-300">
            <p>
              Since our founding in 2019, AVXIRA Games has been at the forefront of gaming innovation. 
              What started as a small indie studio has grown into a powerhouse of creativity and technical excellence.
            </p>
            <p>
              Our team of passionate developers, artists, and designers work tirelessly to create games 
              that not only entertain but also inspire and connect players from around the world.
            </p>
            <p>
              With over 12 successful titles and millions of active players, we continue to push the 
              boundaries of what's possible in interactive entertainment.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
              { label: 'Years of Excellence', value: '5+' },
              { label: 'Team Members', value: '63+' },
              { label: 'Countries Reached', value: '180+' },
              { label: 'Community Size', value: '2.5M+' }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center p-4 bg-gradient-to-br from-electric-blue/5 to-vibrant-purple/5 rounded-lg border border-electric-blue/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-display font-bold text-electric-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-electric-blue/20 to-vibrant-purple/20 border border-electric-blue/30">
            <img 
              src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop" 
              alt="AVXIRA Games Studio"
              className="w-full h-full object-cover"
              onLoad={() => console.log("About section image loaded")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-black/60 via-transparent to-transparent" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-full animate-float opacity-20" />
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-vibrant-purple to-electric-blue rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }} />
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="game-card h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <Badge className="bg-electric-blue text-space-black mb-4">Our Team</Badge>
          <h3 className="text-3xl font-display font-bold mb-4 text-white">
            Meet the Creators
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our diverse team of talented professionals brings together expertise from across the gaming industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="game-card text-center">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-charcoal-gray to-space-black rounded-full flex items-center justify-center mx-auto border border-electric-blue/30">
                        <Icon className="w-10 h-10 text-electric-blue" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-vibrant-purple rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{member.count}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-display font-bold mb-2 text-white">
                      {member.role}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}