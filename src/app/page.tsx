import About from "@/components/About";
import Carousel from "@/components/Carousel";
import FixeddBackground from "@/components/FixeddBackground";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurService from "@/components/OurService";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-background">
      {/* <FixeddBackground /> */}
      <Navbar />
      <HeroSection />
      {/* <Carousel /> */}
      <About />
      <OurService />
      <Footer />
    </main>
  );
}
