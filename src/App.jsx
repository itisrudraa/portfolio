import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import FloatingDock from "./components/FloatingDock";
import Footer from "./sections/Footer";
import Hackathons from "./sections/Hackathons";

function App(){
  return (
    <>
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