import React from 'react';
import './Item.css'
import { Button, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({ producto }) => {
  
  const obtenerPrecio = (producto) => {
      let precio = producto.precioUnitarioSinIVA * (1 +  producto.porcentajeIVA / 100);
      let precioConFormato = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(precio);

      return precioConFormato;
  }
  
  return (
    <div className="col-12 col-md-6 col-lg-4 my-3">
      <div id={producto.id} className="card product-card">
        <img className="card-img-top img-fluid img-card" 
            src={`https://fpiedrasanta.github.io/34150-piedrasanta-javascript/images/${producto.urlImagen}`} 
            alt={producto.nombre} />
        <div className="card-body">
          <h4 className="card-title">{producto.nombre}</h4>
          <p>{producto.descripcion}</p>
          <p>Precio: {obtenerPrecio(producto)}</p>
          <Nav.Link as={Link} to={`/detalle/${producto.id}`}>
            <Button variant="primary">Ver más detalles</Button>
          </Nav.Link>
        </div>
      </div>
    </div>
  )
}