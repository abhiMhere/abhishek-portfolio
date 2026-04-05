import Hero from "@/components/Hero";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import GithubStats from "@/components/GithubStats";
import Terminal from "@/components/Terminal";
import CursorGlow from "@/components/CursorGlow";
import VisitorCount from "@/components/VisitorCount";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="bg-[#0B0F14] text-white">
      <Hero />
      <About />
      <Metrics />
      <TechStack />
      <Projects />
      <GithubStats/>
      <Terminal />
      <Footer />
      <CursorGlow />
      <VisitorCount/>

    </main>
  );
}