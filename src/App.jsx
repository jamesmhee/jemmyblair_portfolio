import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Works from "./components/Works";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Works />
      <Contact />
    </>
  );
}

export default App;
