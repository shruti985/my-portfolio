import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact/>
      </div>
    </>
  );
}

export default App
