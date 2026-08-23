import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FaqExplorer } from "@/components/FaqExplorer";
import { LineGroups } from "@/components/LineGroups";
import { FoodMap } from "@/components/FoodMap";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FaqExplorer />
      <LineGroups />
      <FoodMap />
      <Footer />
    </>
  );
}
