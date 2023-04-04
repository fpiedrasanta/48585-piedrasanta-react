import React from 'react'
import './ItemListContainer.css'

import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = ({ agregarProducto }) => {
  return (
    <div className="product-content">
      <div id="productos" className="row">
        <ItemList agregarProducto={agregarProducto} />
      </div>
    </div>
  )
}
