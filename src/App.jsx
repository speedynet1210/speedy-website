import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import SatelliteFeature from "./components/sections/SatelliteFeature";
import About from "./components/sections/About"; // <--- Import About
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="font-sans selection:bg-speedy-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SatelliteFeature />
        <About /> {/* <--- Place it here */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
