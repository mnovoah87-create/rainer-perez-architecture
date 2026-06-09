import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Process from "./components/Process";
import SouthFlorida from "./components/SouthFlorida";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [section, setSection] = useState("home");

  function handleNav(sec) {
    setSection(sec);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderSection() {
    switch (section) {
      case "home":          return <Hero onNav={handleNav} />;
      case "about":         return <About />;
      case "work":          return <Work />;
      case "services":      return <Services />;
      case "process":       return <Process />;
      case "south-florida": return <SouthFlorida />;
      case "contact":       return <Contact />;
      default:              return <Hero onNav={handleNav} />;
    }
  }

  return (
    <div>
      <Nav section={section} onNav={handleNav} />
      <main>{renderSection()}</main>
      <Footer onNav={handleNav} />
    </div>
  );
}
