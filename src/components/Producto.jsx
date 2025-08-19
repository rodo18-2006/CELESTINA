import React from "react";
import ProductCard from "./ProductCard";

export default function Productos({ agregarAlCarrito }) {
  const productos = [
    { id: 1, name: "Remera Negra", price: 2500, image: "/ropa1.jpg" },
    { id: 2, name: "Pantalón Blanco", price: 4500, image: "/ropa2.jpg" },
    { id: 3, name: "Campera Oversize", price: 7000, image: "/ropa3.jpg" },
  ];

  return (
    <section className="productos">
      {productos.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={agregarAlCarrito} />
      ))}
    </section>
  );
}
