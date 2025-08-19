import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onCartClick, cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        CELESTINA
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/accesorios">Accesorios</Link>
        </li>

        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <button className="cart-btn" onClick={onCartClick}>
            🛒 Carrito ({cartCount})
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
