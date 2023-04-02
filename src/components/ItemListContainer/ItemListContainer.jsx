import React from 'react'
import './ItemListContainer.css'

import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = (props) => {
  return (
    <div className="product-content">
      <div id="productos" className="row">
        <ItemList />
      </div>
    </div>
  )
}
