import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = (props) => {
  return (
    <div className="product-content">
      <div id="productos" className="row">
        <div className="col-12">{props.greeting}</div> 
      </div>
    </div>
  )
}
