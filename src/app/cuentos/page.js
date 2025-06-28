// src/app/cuentos/page.jsx

import React from "react";
import Image from "next/image";
import "./cuentos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cuentos = [
  {
    titulo: "El bosque mágico",
    autor: "Mercedes Suárez",
    resumen: "Un viaje inolvidable a un bosque donde los árboles cuentan historias.",
    imagen: "/portadacuento.png",
    link: "/cuentos/1",
  },
  {
    titulo: "La luna y el niño",
    autor: "Mercedes Suárez",
    resumen: "Un niño curioso descubre los secretos de la luna.",
    imagen: "/portadacuento.png",
    link: "/cuentos/2",
  },
  {
    titulo: "El dragón dormilón",
    autor: "Mercedes Suárez",
    resumen: "Un dragón que solo quería dormir... hasta que un día algo cambió.",
    imagen: "/portadacuento.png",
    link: "/cuentos/3",
  },
  {
    titulo: "La flor que cantaba",
    autor: "Mercedes Suárez",
    resumen: "En un valle escondido, una flor con voz melodiosa guarda un secreto ancestral.",
    imagen: "/portadacuento.png",
    link: "/cuentos/4",
  },
  {
    titulo: "El zorro de obsidiana",
    autor: "Mercedes Suárez",
    resumen: "Una leyenda mexica sobre un zorro que brilla bajo la luna nueva.",
    imagen: "/portadacuento.png",
    link: "/cuentos/5",
  },
  {
    titulo: "Los tres volcanes",
    autor: "Mercedes Suárez",
    resumen: "Un cuento que explica el origen mágico del Popocatépetl, Iztaccíhuatl y el Citlaltépetl.",
    imagen: "/portadacuento.png",
    link: "/cuentos/6",
  },
  {
    titulo: "La niña que hablaba con el viento",
    autor: "Mercedes Suárez",
    resumen: "Una pequeña descubre que puede comunicarse con el viento del norte.",
    imagen: "/portadacuento.png",
    link: "/cuentos/7",
  },
  {
    titulo: "El colibrí de fuego",
    autor: "Mercedes Suárez",
    resumen: "Una historia de valentía y transformación en un bosque encantado.",
    imagen: "/portadacuento.png",
    link: "/cuentos/8",
  }
];



export default function CuentosPage() {
  return (
    <main>
      <Header />
      <section className="cuentos-page">
        <h1 className="cuentos-title">Catálogo de Cuentos</h1>
        <p className="cuentos-description">
          Explora relatos llenos de magia, aventura y tradición.
        </p>

        <div className="cuentos-grid">
          {cuentos.map((cuento, index) => (
            <a key={index} href={cuento.link} className="cuento-card">
              <div className="cuento-image-wrapper">
                <Image
                  src={cuento.imagen}
                  alt={`Portada de ${cuento.titulo}`}
                  width={300}
                  height={200}
                  className="cuento-image"
                />
              </div>
              <h3>{cuento.titulo}</h3>
              <p className="cuento-author">por {cuento.autor}</p>
              <p className="cuento-summary">{cuento.resumen}</p>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}