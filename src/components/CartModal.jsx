import React from "react";
import "./CartModal.css";

export default function CartModal({ isOpen, onClose, cart, removeFromCart }) {
  if (!isOpen) return null; // si no está abierto, no renderiza nada

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>🛒 Carrito</h2>

        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(index)}>❌</button>
                </li>
              ))}
            </ul>
            <h3>Total: ${total}</h3>
            <button className="checkout-btn">Finalizar compra</button>
          </>
        )}
      </div>
    </div>
  );
}
