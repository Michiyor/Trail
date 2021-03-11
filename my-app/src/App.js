import React from "react";
import './App.css';
import Menu from "./compoments/Menu";
import Hero from "./compoments/Hero";
import Footer from "./compoments/Footer";
import Gallery from "./compoments/Gallery";
import Contact from "./compoments/Contact/Contact";

function App() {
  return (
  <div className={"App"}>
    <Menu/>
    <Hero/>
    <Gallery/>
    <Contact/>
    <Footer/>
  </div>
  );
}


export default App;
