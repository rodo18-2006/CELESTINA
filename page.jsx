"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";
import CartModal from "../components/CartModal";
import Footer from "../components/Footer";

// Importar estilos CSS
import "../src/styles/globals.css";
import "../src/styles/Header.css";
import "../src/styles/Hero.css";
import "../src/styles/ProductsSection.css";
import "../src/styles/ProductCard.css";
import "../src/styles/CartModal.css";
import "../src/styles/Footer.css";

const productos = [
  {
    id: 1,
    nombre: "Camiseta Básica",
    precio: 25.99,
    imagen: "Camiseta Negra",
  },
  {
    id: 2,
    nombre: "Jeans Clásicos",
    precio: 79.99,
    imagen: "Jeans Azules",
  },
  {
    id: 3,
    nombre: "Chaqueta de Cuero",
    precio: 199.99,
    imagen: "Chaqueta Negra",
  },
  {
    id: 4,
    nombre: "Vestido Elegante",
    precio: 89.99,
    imagen: "Vestido Negro",
  },
  {
    id: 5,
    nombre: "Zapatillas Deportivas",
    precio: 129.99,
    imagen: "Zapatillas Blancas",
  },
  {
    id: 6,
    nombre: "Camisa Formal",
    precio: 59.99,
    imagen: "Camisa Blanca",
  },
  {
    id: 7,
    nombre: "Falda Midi",
    precio: 45.99,
    imagen: "Falda Negra",
  },
  {
    id: 8,
    nombre: "Suéter de Lana",
    precio: 69.99,
    imagen: "Suéter Gris",
  },
];

export default function Page() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad === 0) {
      setCarrito(carrito.filter((item) => item.id !== id));
    } else {
      setCarrito(
        carrito.map((item) =>
          item.id === id ? { ...item, cantidad: nuevaCantidad } : item
        )
      );
    }
  };

  const obtenerTotalCarrito = () => {
    return carrito.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
  };

  const obtenerCantidadTotal = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Header
        cantidadCarrito={obtenerCantidadTotal()}
        abrirCarrito={() => setMostrarCarrito(true)}
      />
      <Hero />
      <ProductsSection
        productos={productos}
        agregarAlCarrito={agregarAlCarrito}
      />
      <Footer />

      {mostrarCarrito && (
        <CartModal
          carrito={carrito}
          cerrarCarrito={() => setMostrarCarrito(false)}
          actualizarCantidad={actualizarCantidad}
          total={obtenerTotalCarrito()}
        />
      )}
    </div>
  );
}
