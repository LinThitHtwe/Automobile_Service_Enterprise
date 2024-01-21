import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="m-0 flex h-[200vh] flex-col bg-[#f8f8f8] p-0">
      <Navbar />
      <HeroSection />
      {/* <Carousel /> */}
      <Footer />
    </main>
  );
}
