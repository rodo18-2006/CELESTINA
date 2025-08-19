import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Productos from "./components/Producto";
import Accesorios from "./components/Accesorio";
import CartModal from "./components/CartModal";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  // Recuperar carrito guardado en localStorage al iniciar
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (producto) => {
    const nuevoCarrito = [...cart, producto];
    setCart(nuevoCarrito);
    localStorage.setItem("cart", JSON.stringify(nuevoCarrito));
  };

  const removeFromCart = (index) => {
    const nuevoCarrito = cart.filter((_, i) => i !== index);
    setCart(nuevoCarrito);
    localStorage.setItem("cart", JSON.stringify(nuevoCarrito));
  };

  return (
    <Router>
      <Navbar onCartClick={() => setIsCartOpen(true)} cartCount={cart.length} />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />

      <Routes>
        <Route path="/" element={<Home agregarAlCarrito={addToCart} />} />
        <Route
          path="/productos"
          element={<Productos agregarAlCarrito={addToCart} />}
        />
        <Route
          path="/accesorios"
          element={<Accesorios agregarAlCarrito={addToCart} />}
        />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </Router>
  );
}
