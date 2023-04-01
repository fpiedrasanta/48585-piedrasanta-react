import { useState, React } from 'react'

import './ItemCount.css'

export const ItemCount = ({ counter }) => {
    return (
        <span id="cantidad_carrito" className="badge rounded-circle">{counter}</span>
    );
}
