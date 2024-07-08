import React from "react";
import {
  Work,
  Skills,
  Footer,
  Header,
  About,
} from "./container/index.js";
import { Navbar } from "./components/index.js";
import "./App.scss"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
