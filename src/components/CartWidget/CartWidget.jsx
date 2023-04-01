import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount';
import './CartWidget.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = ({ counter }) => {
  return (
    <a href="index.html" className="navbar-brand" id="boton_carrito">
      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
      <ItemCount counter={ counter }/>
    </a>
  )
}
