"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Star, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const games = [
  {
    id: 1,
    title: "Cyber Nexus",
    category: "Action RPG",
    description: "An immersive cyberpunk adventure in a dystopian future city.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    rating: 4.8,
    players: "1.2M+",
    releaseDate: "2024",
    tags: ["Cyberpunk", "Open World", "Multiplayer"],
    featured: true
  },
  {
    id: 2,
    title: "Quantum Wars",
    category: "Strategy",
    description: "Epic space battles across multiple dimensions and timelines.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop",
    rating: 4.6,
    players: "800K+",
    releaseDate: "2024",
    tags: ["Space", "Strategy", "Sci-Fi"]
  },
  {
    id: 3,
    title: "Mystic Realms",
    category: "Fantasy MMORPG",
    description: "Explore magical worlds filled with ancient mysteries and powerful artifacts.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    rating: 4.9,
    players: "2.1M+",
    releaseDate: "2023",
    tags: ["Fantasy", "MMORPG", "Magic"]
  },
  {
    id: 4,
    title: "Neon Racer",
    category: "Racing",
    description: "High-speed racing through neon-lit cityscapes with customizable vehicles.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
    rating: 4.5,
    players: "650K+",
    releaseDate: "2024",
    tags: ["Racing", "Neon", "Fast-Paced"]
  },
  {
    id: 5,
    title: "Shadow Protocol",
    category: "Stealth Action",
    description: "Master the art of stealth in this tactical espionage thriller.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&h=400&fit=crop",
    rating: 4.7,
    players: "950K+",
    releaseDate: "2023",
    tags: ["Stealth", "Action", "Tactical"]
  },
  {
    id: 6,
    title: "Galactic Empire",
    category: "4X Strategy",
    description: "Build your empire across the galaxy in this epic grand strategy game.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
    rating: 4.4,
    players: "450K+",
    releaseDate: "2024",
    tags: ["Strategy", "Empire", "Space"]
  }
];

export function GamesShowcase() {
  const [selectedGame, setSelectedGame] = useState(games[0]);

  console.log("Games showcase rendered, selected game:", selectedGame.title);

  return (
    <section id="games" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title mb-6">Our Games</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Discover our collection of award-winning games that have captivated millions of players worldwide.
        </p>
      </motion.div>

      {/* Featured Game */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-charcoal-gray to-space-black border border-electric-blue/30">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-video lg:aspect-auto">
              <img 
                src={selectedGame.image} 
                alt={selectedGame.title}
                className="w-full h-full object-cover"
                onLoad={() => console.log("Featured game image loaded:", selectedGame.title)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black/60 to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="lg"
                  className="w-20 h-20 rounded-full bg-electric-blue/20 hover:bg-electric-blue/30 backdrop-blur-sm border border-electric-blue/50 transition-all duration-300 hover:scale-110"
                  onClick={() => console.log("Play featured game:", selectedGame.title)}
                >
                  <Play className="w-8 h-8 text-electric-blue ml-1" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-vibrant-purple text-white">Featured</Badge>
                <Badge variant="outline" className="border-electric-blue text-electric-blue">
                  {selectedGame.category}
                </Badge>
              </div>

              <h3 className="text-4xl lg:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-white to-electric-blue bg-clip-text text-transparent">
                {selectedGame.title}
              </h3>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {selectedGame.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center text-electric-blue mb-1">
                    <Star className="w-5 h-5 mr-1" />
                    <span className="font-bold">{selectedGame.rating}</span>
                  </div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-electric-blue mb-1">
                    <Users className="w-5 h-5 mr-1" />
                    <span className="font-bold">{selectedGame.players}</span>
                  </div>
                  <div className="text-sm text-gray-400">Players</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-electric-blue mb-1">
                    <Calendar className="w-5 h-5 mr-1" />
                    <span className="font-bold">{selectedGame.releaseDate}</span>
                  </div>
                  <div className="text-sm text-gray-400">Release</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedGame.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="bg-electric-blue/10 text-electric-blue border border-electric-blue/30"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="cyber-button flex-1"
                  onClick={() => console.log("Play now clicked for:", selectedGame.title)}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Play Now
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-space-black"
                  onClick={() => console.log("Download clicked for:", selectedGame.title)}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Game Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              className={`game-card cursor-pointer ${
                selectedGame.id === game.id ? 'border-electric-blue shadow-neon-blue' : ''
              }`}
              onClick={() => {
                console.log("Game card clicked:", game.title);
                setSelectedGame(game);
              }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onLoad={() => console.log("Game image loaded:", game.title)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-space-black/80 text-electric-blue border border-electric-blue/50">
                      <Star className="w-3 h-3 mr-1" />
                      {game.rating}
                    </Badge>
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-space-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="lg" className="cyber-button">
                      <Play className="w-5 h-5 mr-2" />
                      Play
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs border-electric-blue text-electric-blue">
                      {game.category}
                    </Badge>
                    <span className="text-sm text-gray-400">{game.releaseDate}</span>
                  </div>

                  <h3 className="text-xl font-display font-bold mb-2 text-white">
                    {game.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {game.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-electric-blue text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {game.players}
                    </div>
                    <div className="flex gap-1">
                      {game.tags.slice(0, 2).map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="text-xs bg-electric-blue/10 text-electric-blue"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}