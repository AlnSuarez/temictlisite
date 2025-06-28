import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';
import temictliLogo from '../assets/temictlilogo.jpeg'; // Si usas /public/assets, cambia la ruta a '/assets/temictlilogo.jpeg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Image
          src={temictliLogo}
          alt="Logo Temictli"
          height={80}
          style={{ width: 'auto', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
        />
      </div>
      <nav className="nav">
        <Link href="/" className="nav-link">Inicio</Link>
        <Link href="/cuentos" className="nav-link">Cuentos</Link>
        <Link href="/acerca" className="nav-link">Acerca de</Link>
        <Link href="/contacto" className="nav-link">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;