import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Calendar = dynamic(() =>
  import("@/components/Calendar").then((mod) => ({ default: mod.Calendar })),
  { loading: () => <div className="min-h-[400px]" /> }
);

export default function CalendarPage() {
  return (
    <>
      <Header />
      <Calendar />
      <Footer />
    </>
  );
}