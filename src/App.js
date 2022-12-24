import React from "react";
import { NavMenu, Home, About, Calculator, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
