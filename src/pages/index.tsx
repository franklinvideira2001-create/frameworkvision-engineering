import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import QuickActions from '@/components/QuickActions';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <QuickActions />
      <FeaturesSection />
      <StatsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
