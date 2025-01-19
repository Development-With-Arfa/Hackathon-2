import Image from "next/image";
import HeroSection from "./components/HeroSection";
import HeroCards from "./components/HeroCards";
import PopularCar from "./components/PopularCar";
import RecommendedCar from "./components/RecommendedCar";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroCards />
      <PopularCar />
      <RecommendedCar />
    </main>
  );
}
