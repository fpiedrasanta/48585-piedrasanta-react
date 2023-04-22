import React, { useContext } from 'react'
import './CartWidget.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
  const { obtenerCantidadTotal } = useContext(CartContext);
  
  return (
    <span>
      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
      <span id="cantidad_carrito" className="badge rounded-circle">{obtenerCantidadTotal()}</span>
    </span>
  )
}
