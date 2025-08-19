import React from "react";
import "./Contacto.css";

export default function Contacto() {
  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <p>¿Tienes alguna consulta? Envíanos un mensaje</p>
      <form className="contacto-form">
        <label>Nombre</label>
        <input type="text" placeholder="Tu nombre" />

        <label>Email</label>
        <input type="email" placeholder="Tu correo" />

        <label>Mensaje</label>
        <textarea rows="5" placeholder="Escribe tu mensaje"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
