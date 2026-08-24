import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const ClubExplorer = dynamic(
  () => import("@/components/ClubExplorer").then((mod) => ({ default: mod.ClubExplorer })),
  { loading: () => <div className="min-h-[400px]" /> }
);

export default function ClubsPage() {
  return (
    <>
      <Header />
      <ClubExplorer />
      <Footer />
    </>
  );
}