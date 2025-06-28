"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contacto.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contacto() {
  const formRef = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString();

    emailjs
      .send(
        "service_z47h4jm", // reemplaza con tu SERVICE ID
        "template_g96jjgl", // reemplaza con tu TEMPLATE ID
        {
          title: "Nuevo mensaje de contacto",
          name: formRef.current.nombre.value,
          email: formRef.current.email.value,
          message: formRef.current.mensaje.value,
          time: currentTime,
        },
        "1zx1WfBCOk76fjtzH" // reemplaza con tu PUBLIC KEY
      )
      .then(
        () => {
          setMessageSent(true);
          formRef.current.reset();
          setError(null);
        },
        (err) => {
          console.error("Error al enviar:", err);
          setError("Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <main>
      <Header />
      <section className="contacto-page">
        <div className="contacto-content">
          <h1 className="contacto-title">Contáctanos</h1>
          <p className="contacto-description">
            ¿Tienes alguna pregunta o sugerencia? Escríbenos, estaremos encantados de ayudarte.
          </p>
          <form ref={formRef} onSubmit={sendEmail} className="contacto-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required placeholder="Tu correo electrónico" />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows="5" required placeholder="Escribe tu mensaje aquí" />
            </div>
            <button type="submit" className="form-submit-button">Enviar</button>
            {messageSent && <p className="success-message">¡Mensaje enviado correctamente!</p>}
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
