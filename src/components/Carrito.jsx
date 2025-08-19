import React from "react";
import "./Carrito.css";

export default function Carrito({ carrito, eliminarDelCarrito }) {
  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <section className="carrito">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {carrito.map((prod, i) => (
              <li key={i}>
                {prod.nombre} - ${prod.precio}
                <button onClick={() => eliminarDelCarrito(i)}>X</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </>
      )}
    </section>
  );
}
