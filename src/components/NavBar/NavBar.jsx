import React from 'react';
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <div className="menu">
      <div className="menu-content">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="index.html">
            <img src="./android-chrome-192x192.png" alt="Logo del juego" />
          </a>

          <button className="navbar-toggler" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#navbar_menu" 
                  aria-controls="navbar_menu" 
                  aria-expanded="false" 
                  aria-label="Ver menú">
            <span className="navbar-toggler-icon"></span>
          </button>
            
          <div className="collapse navbar-collapse" id="navbar_menu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="sobre-nosotros.html">Sobre nosotros</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="merchandising.html">Merchandising <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="novedades.html">Novedades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="galeria.html">Galeria</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contacto.html">Contacto</a>
              </li>
              <CartWidget />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
