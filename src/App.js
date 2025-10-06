import React from "react";
import {
  Experience,
  Skills,
  Footer,
  Header,
  Projects,
} from "./container/index.js";
import { Navbar } from "./components/index.js";
import "./App.scss"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Projects /> 
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
