import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
