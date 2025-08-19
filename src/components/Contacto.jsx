import React from "react";
import "./Contacto.css";

function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <h2>Contacto</h2>
      <form className="form">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea placeholder="Tu mensaje" rows="4" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;
