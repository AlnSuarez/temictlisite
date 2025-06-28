import React from "react";
import "./acerca.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Acerca() {
  return (
    <main>
      <Header />
      <section className="acerca-page">
        <div className="acerca-content">
          <h1 className="acerca-title">Acerca de Temictli Cuentos</h1>
          <p className="acerca-text">
            <strong>En Temictli Cuentos creemos que las historias no solo entretienen: también sanan, enseñan y despiertan el corazón.</strong><br /><br />
            Nuestros cuentos son una celebración de la <strong>diversidad</strong>, la <strong>ternura</strong> y la <strong>magia mexicana</strong>. Cada historia está pensada para niñas, niños y adolescentes que quieren crecer siendo auténticos, libres y orgullosos de sus raíces.<br /><br />
            Creemos en una literatura infantil que abra caminos, que abrace todas las identidades y que inspire a soñar sin fronteras. Por eso, en cada página encontrarás personajes diversos, escenarios llenos de cultura y mensajes que nutren la empatía, el respeto y la imaginación.<br /><br />
            📚 <em>Lee. Comparte. Sueña. Acompáñanos.</em><br />
            Porque cada historia importa. <br />
            <strong>Porque tu historia también merece ser contada.</strong> 💛
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
