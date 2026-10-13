import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Why from "./components/Why";
import Flow from "./components/Flow";
import Platform from "./components/Platform";
import Program from "./components/Program";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Features />
        <Why />
        <Flow />
        <Platform />
        <Program />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
