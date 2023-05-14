import React from "react";
import './ItemCount.css'

export const ItemCount = ({ stock, cantidad, setCantidad }) =>{

    const sumar = () =>{
      setCantidad(cantidad < stock ? cantidad + 1 : cantidad);
    }

    const restar = () =>{
      setCantidad(cantidad > 0 ? cantidad - 1 : 0);
    }

    return(
      <div className="contador">
          <button className="btn-contador" onClick={restar}>➖</button>
          <div className="txt-contador">{cantidad}</div>
          <button className="btn-contador" onClick={sumar}>➕</button>
      </div>
    )
}