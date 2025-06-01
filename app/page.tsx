import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { GamesShowcase } from '@/components/games-showcase';
import { AboutSection } from '@/components/about-section';
import { NewsSection } from '@/components/news-section';
import { Footer } from '@/components/footer';
import { ParticleBackground } from '@/components/particle-background';
import { ContentManager } from '@/components/content-manager';

export default function Home() {
  console.log("Main page rendered");
  
  return (
    <div className="min-h-screen bg-space-black relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <GamesShowcase />
          <AboutSection />
          <NewsSection />
        </main>
        <Footer />
      </div>
      <ContentManager />
    </div>
  );
}
