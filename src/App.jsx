import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import FloatingDock from "./components/FloatingDock";
import Footer from "./sections/Footer";
import Hackathons from "./sections/Hackathons";
import { Pointer } from "@/components/ui/pointer"

function App(){
  return (
    <>

      <Pointer>
        <div
          className="
            h-4 w-4
            rounded-full
            bg-red-500
            border-2 border-red-300
            shadow-[0_0_8px_3px_rgba(239,68,68,0.6),0_0_20px_6px_rgba(239,68,68,0.35)]
          "
        />
      </Pointer>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <FloatingDock />
      <Hackathons />
      <Footer />
    </>
  );
}

export default App;