import React from 'react';
import Link from 'next/link';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <span className="footer-logo">🌙 Temictli</span>
        <p className="footer-desc">
          Cuentos con raíz, alas y corazones mexicano.
        </p>
      </div>
      <nav className="footer-nav">
        <Link href="/cuentos" className="footer-link">Cuentos</Link>
        <Link href="/categorias" className="footer-link">Categorías</Link>
        <Link href="/contacto" className="footer-link">Contacto</Link>
      </nav>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2025 Temictli. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;