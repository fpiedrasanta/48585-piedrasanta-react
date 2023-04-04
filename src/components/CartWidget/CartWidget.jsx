import React from 'react'
import './CartWidget.css'

import { ItemCount } from '../ItemCount/ItemCount';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = ({ cantidadTotal }) => {
  const itemCountStyle = {
    top: 0 + 'px'
  };

  return (
    <a href="index.html" className="navbar-brand" id="boton_carrito">
      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
      <ItemCount count={cantidadTotal} style={itemCountStyle}/>
    </a>
  )
}
