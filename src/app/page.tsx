import Image from "next/image";
import HeroSection from "./components/HeroSection";
import HeroCards from "./components/HeroCards";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroCards />
      <Cards />
    </main>
  );
}
