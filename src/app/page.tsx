import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Testomonials from "@/components/Testomonials";
import Webinars from "@/components/Webinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Featured />
      <WhyChooseUs />
      <Testomonials />
      <Webinars />
    </main>
  );
}
