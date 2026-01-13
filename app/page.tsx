import HeroSection from "./components/HeroSection";
import FeaturedCollection from "./components/FeaturedCollection";
import BrandStory from "./components/BrandStory";
import Newsletter from "./components/Newsletter";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative">
        <HeroSection />
        <FeaturedCollection />
        <BrandStory />
        <Newsletter />
      </main>
    </SmoothScrollProvider>
  );
}
