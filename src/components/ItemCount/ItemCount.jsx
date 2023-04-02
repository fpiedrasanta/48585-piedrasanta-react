import React from 'react'
import './ItemCount.css'

export const ItemCount = ({ count, style }) => {
  return (
    <span id="cantidad_carrito" className="badge rounded-circle" style={style}>{count}</span>
  )
}
