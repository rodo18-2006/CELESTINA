import React from "react";
import "./Cart.css";

export default function Cart({ cart, removeFromCart, total }) {
  return (
    <div className="cart">
      <h2>🛒 Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span>
                  {item.name} — ${item.price}
                </span>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button className="checkout-btn">Finalizar compra</button>
        </>
      )}
    </div>
  );
}
