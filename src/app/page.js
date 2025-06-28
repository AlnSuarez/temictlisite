"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import portada from "../assets/portada.png";// Ajusta la ruta según tu estructura
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const destacados = [
  {
    titulo: "El bosque mágico",
    autor: "Mercedes Suárez",
    resumen:
      "Un viaje inolvidable a un bosque donde los árboles cuentan historias.",
    imagen: "/assets/cuento1.jpg",
    link: "/cuentos/1",
  },
  {
    titulo: "La luna y el niño",
    autor: "Mercedes Suárez",
    resumen: "Un niño curioso descubre los secretos de la luna.",
    imagen: "/assets/cuento2.jpg",
    link: "/cuentos/2",
  },
  {
    titulo: "El dragón dormilón",
    autor: "Mercedes Suárez",
    resumen:
      "Un dragón que solo quería dormir... hasta que un día algo cambió.",
    imagen: "/assets/cuento3.jpg",
    link: "/cuentos/3",
  },
];

const Home = () => {
  const [actual, setActual] = useState(0);

  const siguiente = () => setActual((actual + 1) % destacados.length);
  const anterior = () =>
    setActual((actual - 1 + destacados.length) % destacados.length);

  return (
    <main className="home-container">
      <Header />
      <section
        className="home-hero"
        style={{
          backgroundImage: `url(${portada.src})`,
        }}
      >
        <div className="home-hero-content">
          <h1>
            <span className="home-hero-title-main">Bienvenido a</span>
            <br />
            <span className="home-hero-title-brand">Temictli</span>
          </h1>
          <p className="home-hero-desc">
            Descubre un mundo de cuentos para todas las edades.
            <br />
            Explora historias clásicas, relatos modernos y deja volar tu
            imaginación.
          </p>
          <Link href="/cuentos" className="home-cta">
            Explorar cuentos
          </Link>
        </div>
      </section>
      <section className="carousel-section">
        <h2 className="carousel-title">Cuentos destacados</h2>
        <div className="carousel">
          <button
            className="carousel-btn"
            onClick={anterior}
            aria-label="Anterior"
            type="button"
          >
            &#8592;
          </button>
          <div className="carousel-card">
            <Image
              src={destacados[actual].imagen}
              alt={destacados[actual].titulo}
              className="carousel-img"
              width={110}
              height={110}
              style={{ objectFit: "cover", borderRadius: "1rem" }}
            />
            <div className="carousel-info">
              <h3>{destacados[actual].titulo}</h3>
              <p className="carousel-autor">por {destacados[actual].autor}</p>
              <p className="carousel-resumen">{destacados[actual].resumen}</p>
              {/* <Link href={destacados[actual].link} className="carousel-link">Leer cuento</Link> */}
            </div>
          </div>
          <button
            className="carousel-btn"
            onClick={siguiente}
            aria-label="Siguiente"
            type="button"
          >
            &#8594;
          </button>
        </div>
      </section>
      <section className="home-features">
        <div className="feature-card">
          <div className="feature-card-icon">🌟</div>
          <h2 className="feature-card-title">Cuentos destacados</h2>
          <p className="feature-card-desc">
            Lee los cuentos más populares y recomendados por nuestra comunidad.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-card-icon">📚</div>
          <h2 className="feature-card-title">Categorías</h2>
          <p className="feature-card-desc">
            Encuentra cuentos de hadas, aventuras, fantasía, animales y mucho
            más.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-card-icon">✍️</div>
          <h2 className="feature-card-title">Comparte tu cuento</h2>
          <p className="feature-card-desc">
            ¿Tienes una historia? ¡Envíala y compártela con el mundo!
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;