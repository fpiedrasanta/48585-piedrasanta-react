import React from 'react'
import './CartWidget.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
      <span id="cantidad_carrito" className="badge rounded-circle">1</span>
    </span>
  )
}
