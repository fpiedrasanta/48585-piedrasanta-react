import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = ({cantidadTotal}) => {
  return (
    <div className="menu">
      <div className="menu-content">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" href="index.html">
              <img src="android-chrome-192x192.png" alt="Logo" />
            </Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sobre-nosotros">Sobre nosotros</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/merchandising">Merchandising</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/novedades">Novedades</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/galeria">Galeria</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">Contacto</Link>
                </li>
              </ul>
            </div>

            <CartWidget cantidadTotal={cantidadTotal}/>
          </div>
        </nav>
      </div>
    </div>
  );
}
