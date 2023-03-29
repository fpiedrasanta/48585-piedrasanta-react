import React from 'react'
import './CartWidget.css'

export const CartWidget = () => {
  return (
    <li className="nav-item " >
      <a id="boton_carrito" className="btn btn-secondary">
        <i className="fas fa-shopping-cart fa-1x"></i>
        <span id="cantidad_carrito" className="badge rounded-circle">1</span>
      </a>
    </li>
  )
}
