import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import FloatingDock from "./components/FloatingDock";
import Footer from "./sections/Footer";

function App(){
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <FloatingDock />
      <Footer />
    </>
  );
}

export default App;