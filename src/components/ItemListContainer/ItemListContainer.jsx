import { React } from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({ greeting, sumar, restar, resetear }) => {
  return (
    <div className="product-content">
      <div id="productos" className="row">
        <div className="col-12">{greeting}</div> 
        <button onClick={sumar}>➕</button>
        <button onClick={restar}>➖</button>
        <button onClick={resetear}>❌</button>
      </div>
    </div>
  )
}
