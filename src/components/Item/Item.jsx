import React from 'react'
import './Item.css'

import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({ producto }) => {
  const itemCountStyle = {
    top: -8 + 'px'
  };
  
  return (
    <div className="col-12 col-md-6 col-lg-4 my-3">
      <div id={producto.id} className="card card-product">
          <img className="card-img-top img-fluid img-product" 
              src={"https://fpiedrasanta.github.io/34150-piedrasanta-javascript/images/" + producto.urlImagen }
              alt={producto.nombre} />
          <div className="card-body">
              <h4 className="card-title">{producto.nombre}</h4>
              <p>{producto.descripcion}</p>
              <p>Precio: </p>
              <button className="btn btn-outline-success">Agregar</button>
          </div>
          <ItemCount count="1" style={itemCountStyle}/>
      </div>
    </div>
  )
}
