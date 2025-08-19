import React from "react";
import ProductCard from "./ProductCard";
import "./Accesorios.css";

export default function Accesorios({ agregarAlCarrito }) {
  const accesorios = [
    { id: 1, name: "Gorra Negra", price: 1200, image: "/accesorio1.jpg" },
    { id: 2, name: "Cinturón Minimal", price: 1500, image: "/accesorio2.jpg" },
    { id: 3, name: "Mochila Urbana", price: 3000, image: "/accesorio3.jpg" },
  ];

  return (
    <section className="accesorios">
      <h2>Accesorios</h2>
      <div className="productos-grid">
        {accesorios.map((acc) => (
          <ProductCard
            key={acc.id}
            product={acc}
            addToCart={agregarAlCarrito}
          />
        ))}
      </div>
    </section>
  );
}
