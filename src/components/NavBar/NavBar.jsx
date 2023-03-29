import React from 'react';
import './NavBar.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <div className="menu">
      <div className="menu-content">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src="android-chrome-192x192.png" alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="sobre-nosotros.html">Sobre nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="merchandising.html">Merchandising</a>
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
              </ul>
            </div>

            <CartWidget />
          </div>
        </nav>
      </div>
    </div>
  );
}
