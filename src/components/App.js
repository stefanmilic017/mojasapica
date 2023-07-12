import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Accordion from "./Accordion";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

import "../styles/App.css";

const App = () => {

  return (
    <div>
      <NavBar />
      <About />
      <Accordion />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
