import React from "react";
import { NavLink } from "react-router-dom";
import carrito from "../assets/img/carrito.png";
import pizza from "../assets/img/pizza.png";

export default function Navbar() {
  const activeClass = (isActive) => (isActive ? "active" : undefined);

  return (
    <nav>
      <div className="nav-left">
        <NavLink className={activeClass} to="/">
          <img className="icon" src={pizza} alt="Pizza" width="20" />
          Pizzería Mamma Mia!
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink className={activeClass} to="/Carrito">
          <img className="icon " src={carrito} alt="Carrito" width="20" />
        </NavLink>
      </div>
    </nav>
  );
}
