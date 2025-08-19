import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar</button>
    </div>
  );
}
