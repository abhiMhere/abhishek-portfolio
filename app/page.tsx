import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Terminal from "@/components/Terminal";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import VisitorCount from "@/components/VisitorCount";

export default function Home() {
  return (
    <main className="bg-[#0B0F14] text-white">
      <Hero />
      <Metrics />
      <TechStack />
      <Projects />
      <Terminal />
      <Footer />
      <CursorGlow />
      <VisitorCount/>
    </main>
  );
}