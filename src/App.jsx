import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home"
import Carrito from "./views/Carrito";
import Pizzas from "./views/Pizzas";


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pizza/:id" element={<Pizzas />} /> 
      </Routes>
      </>
  );
};

export default App;
