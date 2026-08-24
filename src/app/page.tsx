import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FaqExplorer } from "@/components/FaqExplorer";
import { Footer } from "@/components/Footer";
import { FreshmanResources } from "@/components/FreshmanResources";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FreshmanResources />
      <FaqExplorer />
      <Footer />
    </>
  );
}
