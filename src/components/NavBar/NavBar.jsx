import React from 'react';
import './NavBar.css'

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { CartWidget } from '../CartWidget/CartWidget'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const NavBar = () => {
  return (
    <div className="menu">
      <div className="menu-content">  
        <Navbar bg="light" expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Navbar.Brand as={Link} to='/' className="ml-auto">
              <img src="/android-chrome-192x192.png" alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav" className="collapse navbar-collapse">
              <Nav className="navbar-nav ms-auto">
                <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                <Nav.Link as={Link} to='/productos/indumentaria'>Indumentaria</Nav.Link>
                <Nav.Link as={Link} to='/productos/figuras'>Figuras 3D</Nav.Link>
                <Nav.Link as={Link} to='/cart'><CartWidget /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
}
