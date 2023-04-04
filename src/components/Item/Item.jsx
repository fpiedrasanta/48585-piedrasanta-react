import React, { useState } from 'react'
import './Item.css'

import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({ producto, agregarProducto }) => {
  const itemCountStyle = {
    top: -8 + 'px'
  };
  
  const[cantidad, setCantidad] = useState(0);

  const agregar = () => {
    setCantidad(agregarProducto(producto));
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 my-3">
      <div id={producto.id} className="card card-product">
          <img className="card-img-top img-fluid img-product" 
              src={"https://fpiedrasanta.github.io/34150-piedrasanta-javascript/images/" + producto.urlImagen }
              alt={producto.nombre} />
          <div className="card-body">
              <h4 className="card-title">{producto.nombre}</h4>
              <p>{producto.descripcion}</p>
              <p>Precio: {producto.obtenerPrecioUnitarioConIVA().toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
              <button className="btn btn-outline-success" onClick={agregar}>Agregar</button>
          </div>
          <ItemCount count={cantidad} style={itemCountStyle}/>
      </div>
    </div>
  )
}
