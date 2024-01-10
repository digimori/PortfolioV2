import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Education from "./components/education/Education";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Education">
        <Education />
      </section>
      <section id="Projects">
        <Portfolio />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
