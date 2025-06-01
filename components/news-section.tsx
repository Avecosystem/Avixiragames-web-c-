"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const news = [
  {
    id: 1,
    title: "Cyber Nexus Receives Major Update with New Storyline",
    excerpt: "Experience an entirely new chapter in the Cyber Nexus universe with enhanced graphics, new characters, and expanded gameplay mechanics.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    category: "Game Update",
    date: "2024-05-15",
    readTime: "3 min",
    views: "12.5K",
    featured: true
  },
  {
    id: 2,
    title: "AVXIRA Games Wins 'Studio of the Year' at Gaming Awards 2024",
    excerpt: "We're honored to receive this prestigious award recognizing our commitment to innovation and player experience.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop",
    category: "Awards",
    date: "2024-05-10",
    readTime: "2 min",
    views: "8.2K"
  },
  {
    id: 3,
    title: "Behind the Scenes: Creating the Worlds of Mystic Realms",
    excerpt: "Dive deep into our design process and discover how we bring fantastical worlds to life through cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    category: "Development",
    date: "2024-05-08",
    readTime: "5 min",
    views: "15.3K"
  },
  {
    id: 4,
    title: "Quantum Wars Tournament Series Announced",
    excerpt: "Join the ultimate strategy gaming competition with $100,000 in prizes and exclusive rewards for participants.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop",
    category: "Esports",
    date: "2024-05-05",
    readTime: "4 min",
    views: "9.7K"
  },
  {
    id: 5,
    title: "New Partnership with Leading VR Technology Company",
    excerpt: "Expanding our capabilities to bring immersive virtual reality experiences to our upcoming game titles.",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop",
    category: "Partnership",
    date: "2024-05-02",
    readTime: "3 min",
    views: "6.8K"
  },
  {
    id: 6,
    title: "Community Spotlight: Player-Created Content Showcase",
    excerpt: "Celebrating the incredible creativity of our community with featured mods, artwork, and fan-created content.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop",
    category: "Community",
    date: "2024-04-28",
    readTime: "4 min",
    views: "11.2K"
  }
];

export function NewsSection() {
  console.log("News section rendered with", news.length, "articles");

  const featuredNews = news.find(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title mb-6">Latest News</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Stay updated with the latest developments, announcements, and behind-the-scenes content from AVXIRA Games.
        </p>
      </motion.div>

      {/* Featured Article */}
      {featuredNews && (
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="game-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-auto">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                    onLoad={() => console.log("Featured news image loaded:", featuredNews.title)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-vibrant-purple text-white">Featured</Badge>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="border-electric-blue text-electric-blue">
                      {featuredNews.category}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredNews.date).toLocaleDateString()}
                    </div>
                  </div>

                  <h3 className="text-3xl font-display font-bold mb-4 text-white leading-tight">
                    {featuredNews.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredNews.readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredNews.views}
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="cyber-button w-fit"
                    onClick={() => console.log("Read featured article:", featuredNews.title)}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularNews.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="game-card h-full cursor-pointer group">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onLoad={() => console.log("News image loaded:", article.title)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className={`${
                        article.category === 'Game Update' ? 'bg-electric-blue text-space-black' :
                        article.category === 'Awards' ? 'bg-vibrant-purple text-white' :
                        article.category === 'Development' ? 'bg-neon-green text-space-black' :
                        article.category === 'Esports' ? 'bg-crimson-red text-white' :
                        'bg-charcoal-gray text-white'
                      }`}
                    >
                      {article.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4 text-white text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-display font-bold mb-3 text-white line-clamp-2 group-hover:text-electric-blue transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {article.views}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-electric-blue hover:text-white hover:bg-electric-blue transition-all p-2"
                      onClick={() => console.log("Read article:", article.title)}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Button 
          size="lg"
          className="cyber-button"
          onClick={() => console.log("Load more news clicked")}
        >
          Load More Articles
        </Button>
      </motion.div>
    </section>
  );
}