import React from "react";

const productos = [
  { id: 1, name: "Remera Minimal", price: 25 },
  { id: 2, name: "Pantalón Negro", price: 40 },
  { id: 3, name: "Campera Oversize", price: 60 },
];

export default function Productos({ addToCart }) {
  return (
    <section className="productos-section">
      <h2>Productos</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <h3>{producto.name}</h3>
            <p>${producto.price}</p>
            <button onClick={() => addToCart(producto)}>Agregar</button>
          </div>
        ))}
      </div>
    </section>
  );
}
